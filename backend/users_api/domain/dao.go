package domain

import "fmt"

// Get ...
func (user *User) Get() {
	fmt.Println("Get a user using id.")
}

// Save ...
func (user *User) Save() {
	fmt.Println("Save a new user to the database")
}

// Delete ...
func (user *User) Delete() {
	fmt.Println("Delete a user using id.")
}

// Update ...
func (user *User) Update() {
	fmt.Println("Update user profile")
}

// Search ...
func (user *User) Search() {
	fmt.Println("Search users with the given args")
}
