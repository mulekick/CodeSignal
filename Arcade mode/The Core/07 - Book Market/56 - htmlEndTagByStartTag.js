'use strict'
htmlEndTagByStartTag = t => "</" + t.split(">")[0].split(" ")[0].split("<")[1] + ">"
