package app

import (
	"github.com/group-work/backend/users_api/controllers/ping"
)

func mapURLs() {
	router.GET("/ping", ping.Ping)
}
