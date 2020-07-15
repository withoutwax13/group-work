package errors

type RESTError struct {
	Message string
	Status  int
	Error   string
}
