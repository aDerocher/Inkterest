from flask.cli import AppGroup
from .users import seed_users, undo_users
from .follows import seed_follows, undo_follows
from .canvases import seed_canvases, undo_canvases
from .categories import seed_categories, undo_categories
from .inks import seed_inks, undo_inks
from .ink_on_canvases import seed_ink_on_canvases, undo_ink_on_canvases

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_follows()
    seed_categories()
    seed_inks()
    seed_canvases()
    seed_ink_on_canvases()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_follows()
    undo_categories()
    undo_inks()
    undo_canvases()
    undo_ink_on_canvases()
    # Add other undo functions here
