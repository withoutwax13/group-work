package domain

// User type ...
type User struct {
	ID             int64   `json:"id"`
	Email          string  `json:"email"`
	LastName       string  `json:"last_name"`
	FirstName      string  `json:"first_name"`
	DateCreated    string  `json:"date_created"`
	ProfilePicture string  `json:"profile_picture"`
	GroupsJoinedID []int64 `json:"groups_joined_id"`
}
