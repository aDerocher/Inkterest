from boto3 import NullHandler
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.fields import BooleanField, SubmitField
from wtforms.validators import DataRequired

class NewCanvasForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    private_canvas = BooleanField('Is Private', default=False)

class InkOnCanvasForm(FlaskForm):
    canvas_id = IntegerField('Canvas_id', validators=[DataRequired()])
    ink_id = IntegerField('Ink_id', validators=[DataRequired()])
