package main

import (
	"github.com/mingrammer/go-todo-rest-api-example/app"
	"github.com/withoutwax13/group-work/src/backend/config"
)

func main() {
	config := config.GetConfig()
	app := app.App()

}
