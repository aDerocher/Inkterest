from flask.cli import AppGroup
from .users import seed_users, undo_users
from .canvases import seed_canvases, undo_canvases
from .categories import seed_categories, undo_categories
from .inks import seed_inks, undo_inks

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_categories()
    seed_inks()
    seed_canvases()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_inks()
    undo_categories()
    undo_canvases()
    undo_users()
    # Add other undo functions here
