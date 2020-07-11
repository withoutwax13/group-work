package domain

// User type is the user profile info.
type User struct {
	ID          int64  `json:"id"`
	Name        string `json:"name"`
	Email       string `json:"email"`
	DateCreated string `json:"date_created"`
}
