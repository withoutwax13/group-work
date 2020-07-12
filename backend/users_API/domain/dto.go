package domain

// User type ...
type User struct {
	ID             int64  `json:"id"`
	Name           string `json:"name"`
	Email          string `json:"email"`
	DateCreated    string `json:"date_created"`
	ProfilePicture string `json:"profile_picture"`
}
