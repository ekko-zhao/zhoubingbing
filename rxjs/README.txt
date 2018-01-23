
// 安装 ------------------------------------------------------------
	npm install --save rxjs

	import * as Rx from 'rxjs';
	import { Observable } as Rx from 'rxjs';
	
	http://reactivex.io/rxjs/manual/overview.html#introduction
	
// 兼容性
	gte ie9

//Subscription订阅——————————————————
	var observable = Rx.Observable.interval(1000); 
	var subscription = observable.subscribe(x => console.log(x));
	subscription.unsubscribe();

#add
	var observable1 = Rx.Observable.interval(400); 
	var observable2 = Rx.Observable.interval(300);

	var subscription = observable1.subscribe(x => console.log('first : ' + x)); 
	var childSubscription = observable2.subscribe(x => console.log(' second: ' + x));

	subscription.add(childSubscription);
	setTimeout(() => { 
		// Unsubscribes BOTH subscription and childSubscription 	
		subscription.unsubscribe(); 
	}, 1000);
	
	#订阅也有一个remove(otherSubscription)方法,用于解除被add添加的子订阅。


//Subject主题 ——————————————————
#Subject是允许值被多播到多个观察者的一种特殊的Observable。 然而纯粹的可观察对象是单播的(每一个订阅的观察者拥有单独的可观察对象的执 行)。

	var subject = new Rx.Subject();
	
	subject.subscribe({
		next: (v) => console.log('observerA: ' + v)
	});
	subject.subscribe({
		next: (v) => console.log('observerB: ' + v)
	});

#在Subject的内部，subscribe并不调用一个新的发送值得执行。它仅仅在观察者注 册表中注册给定的观察者，
	subject.next(1);
	subject.next(2);

	//由于Subject也是一个观察者，这就意味着你可以提供一个Subject当做 observable.subscribe()的参数
	var subject = new Rx.Subject()
	subject.subscribe({ next: (v) => console.log('observerA: ' + v) }); 
	subject.subscribe({ next: (v) => console.log('observerB: ' + v) });
	var observable = Rx.Observable.from([1, 2, 3]);
	observable.subscribe(subject); 

#多播的可观察对象
#multicast方法返回一个看起来很像普通的可观察对象的可观察对象，但是在订阅时 		却有着和Subject一样的行为，multicast返回一个ConnectableObservable，它只 是一个具有connect（）方法的Observable。

	var source=Rx.Observable.from([1,2,3]);
	var subject=new Rx.Subject();
	var multicasted=source.multicast(subject);
	multicasted.subscribe({ next:(v)=>console.log('observerA:' +v); });
	multicasted.subscribe({ next: (v) => console.log('observerB: ' + v) });
	multicasted.connect();

	#connect()方法对于在决定何时开始分享可观察对象的执行是非常重要的。 返回一个 Subscription，你可以取消订阅，以取消共享的Observable执行。

#refCount使得多播可观察对象在其第一个观察者开始订阅时自动的开始执行， 在其最后一个订阅者取消的时候终止执行
	#不需要显示的执行 multicasted.connect(); 和取消订阅了
	var refCounted = source.multicast(subject).refCount();


BehaviorSubject
Subjects的一个变体是BehaviorSubject,其有"当前值"的概念。它储存着要发射给消 费者的最新的值。无论何时一个新的观察者订阅它，都会立即接受到这个来自 BehaviorSubject的"当前值"。
BehaviorSubject对于表示"随时间的值"是很有用的。举个例子，人的生日的事件流是一个Subject,然而人的年龄的流是一个BehaviorSubject。
	
	var subject = new Rx.BehaviorSubject(0);  // 0 is the initial val ue

	subject.subscribe({ next: (v) => console.log('observerA: ' + v) });
	subject.next(1);
	subject.next(2);
	subject.subscribe({ next: (v) => console.log('observerB: ' + v) });
	subject.next(3);

	输出如下:
	observerA: 0 
	observerA: 1 
	observerA: 2 
	// 最新值
	observerB: 2 
	observerA: 3 
	observerB: 3


#ReplaySubject
	一个ReplaySubject类似于一个BehaviorSubject，因为它可以发送一个过去的值(old values)给一个新的订阅者，但是它也可以记录可观察对象的一部分执行。
	一个ReplaySubject 从一个可观察对象的执行中记录多个值，并且可以重新发 送给新的订阅者。

	var subject = new Rx.ReplaySubject(3); // buffer 3 values for ne w subscribers ，注: 缓存了三个值, 
	subject.subscribe({ next: (v) => console.log('observerA: ' + v) });

	subject.next(1);
	subject.next(2);
	subject.next(3);
	subject.next(4);
	// 会把subject 记录的3个值 .next(2); .next(3) .next(4) 传给下面的
	subject.subscribe({
		next: (v) => console.log('observerB: ' + v)
	});
	subject.next(5);

	// 输出如下
	observerA: 1
	observerA: 2
	observerA: 3
	observerA: 4

	// subject 记录的3个值
	observerB: 2
	observerB: 3
	observerB: 4
	
	//next(5);
	observerA: 5
	observerB: 5

#除了缓存值得个数之外，你也可以指定一个以毫秒为单位的时间，来决定过去多久 出现的值可以被重发。在下面的例子中指定一百个缓存值，但是时间参数仅为 500ms。
var subject = new Rx.ReplaySubject(100, 500 /* windowTime */);


#AsyncSubject
AsyncSubject是另一个变体，它只发送给观察者可观察对象执行的最新值，并且仅 在执行结束时。

	var subject = new Rx.AsyncSubject();
	subject.subscribe({
		next: (v) => console.log('observerA: ' + v)
	});
	subject.next(1);
	subject.next(2);
	subject.next(3);
	subject.next(4);

	subject.subscribe({
	next: (v) => console.log('observerB: ' + v)
	});

	subject.next(5);
	subject.complete();
	输出:
	observerA: 5
	observerA: 5


#Scheduler调度者

#使用 observeOn操作符指定用于传递这些值的异步调度程序。
	var observable = Rx.Observable.create(function (observer) {
		observer.next(1);
		observer.next(2);
		observer.next(3);
		observer.complete();
	})
	.observeOn(Rx.Scheduler.async);



//回调函数->可观察对象
	var exists = Rx.Observable.bindCallback(fs.exists); 
	exists('file.txt').subscribe(exists => console.log('Does file ex ist?', exists));

#Creating observables创建可观察对象

外部产生新事件
	var myObservable = new Rx.Subject(); 
	myObservable.subscribe(value => console.log(value)); 
	myObservable.next('foo');

内部产生新事件
	var myObservable = Rx.Observable.create(observer => { observer.next('foo'); setTimeout(() => observer.next('bar'), 1000); }); myObservable.subscribe(value => console.log(value));

#Controlling the flow 控制流
	var input = Rx.Observable.fromEvent(document.querySelector('inpu t'), 'keypress');

	// Filter out target values less than 3 characters long
	input.filter(event => event.target.value.length > 2) .subscribe(value => console.log(value)); 

	// Delay the events
	input.delay(200) .subscribe(value => console.log(value)); 

	// Only let through an event every 200 ms
	input.throttleTime(200) .subscribe(value => console.log(value));

	// Let through latest event after 200 ms
	input.debounceTime(200) .subscribe(value => console.log(value));

	// Stop the stream of events after 3 events
	input.take(3) .subscribe(value => console.log(value)); 

#producing values 生产值
	// typing "hello world" 
	var input = Rx.Observable.fromEvent(document.querySelector('inpu t'), 'keypress');

	// Pass on a new value
	input.map(event => event.target.value) .subscribe(value => console.log(value));  // "h"

	// Pass on a new value by plucking it
	input.pluck('target', 'value') .subscribe(value => console.log(value)); // "h"

	// Pass the two previous values
	input.pluck('target', 'value').pairwise() .subscribe(value => console.log(value)); // ["h", “e]

	// Only pass unique values through
	input.pluck('target', 'value').distinct() .subscribe(value => console.log(value)); // "helo wrd"

	// Do not pass repeating values through
	input.pluck('target', 'value').distinctUntilChanged() .subscribe(value => console.log(value)); // "helo world"

