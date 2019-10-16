# README

# chat-spaceのDB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|username|string|null:false|
|email|string|null:false|
|password|string|null:false|
|group_id|integer|null: false, foreign_key: true|
### Association
-has_many :messages
-has_many :users_groups
-has_many :groups, through:  :users_groups

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|groupname|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|message_id|integer|null: false, foreign_key: true|
### Association
-has_many :messages
-has_many :users_groups
-has_many :users, through:  :users_groups

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user