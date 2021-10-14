from boto3 import NullHandler
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.fields import BooleanField
from wtforms.validators import DataRequired

class NewCanvasForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    private_canvas = BooleanField('Is Private', default=False)

