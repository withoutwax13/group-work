package model

import (
	"time"

	"github.com/google/uuid"
	"github.com/jinzhu/gorm"
)

type Group struct {
	gorm.Model
	UUID  uuid.UUID
	Name  string
	Chats []*Chat
	Users []*User
	//TODO: Files
}
type User struct {
	gorm.Model
	Username string
	Password string
	Email    string
	//Groups   []*group
	DM      []*Chat
	Friends []*User
}
type Chat struct {
	gorm.Model
	UUID     uuid.UUID
	Message  string
	SentTime time.Time
	Archived bool
	//TODO: Chat type text/file/image
}

func (c *Chat) Recall() {
	/* Recall and archive the message if sent within 2 minutes. */
	if &c.SentTime == nil {
		//TODO: Add level based log
		//log.critical()
		panic("Detect Chat without SentTime. UUID: " + c.UUID.String())
	}

	if time.Now().Sub(c.SentTime).Minutes() <= 2 {
		//log.info("Chat recalled")
		c.Archived = true
	} else {
		//log.info("You can only recall message within 2 minutes")
	}
	//TODO: Force update messages at the client side
}
