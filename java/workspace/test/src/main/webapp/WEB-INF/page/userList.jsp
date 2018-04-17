<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>

</head>
<body>
	<c:forEach items="${userList}" var="user">
		${user.userName}
	</c:forEach>
</body>
</html>
