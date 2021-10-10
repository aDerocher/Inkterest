<!-- to init & run migrations -->

1. pipenv run flask db init
2. pipenv run flask db migrate -m "enter_message_here"
    -- to revise migrations: 1. pipenv run flask db migrate -m "enter_message_here"
                             2. pipenv run flask db upgrade
3. pipenv run flask db upgrade
    -- to downgrade: pipenv run flask db downgrade (DESTROYS THE TABLE: USE W/ CAUTION)

<!-- to seed data (these commands are custom made) -->

1. flask seed all
    -- to remove seed data: flask seed undo
