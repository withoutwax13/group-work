package errors

type RESTError struct {
	Message string
	Status  int
	Error   string
}

func BadRequestError(message string) *RESTError {
	err := RESTError{
		Message: message,
		Status:  400,
		Error:   "Bad_Request",
	}
	return &err
}
