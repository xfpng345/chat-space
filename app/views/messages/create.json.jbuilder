json.text @message.body
json.image @message.image.url
json.created_at @message.created_at.strftime("%Y/%m/%d %H:%M")
json.user_name @message.user.name