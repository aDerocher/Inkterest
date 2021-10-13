import flask
from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class ProfileEditForm(FlaskForm):
    firstName = StringField('First Name', validators=[DataRequired()])
    lastName = StringField('Last Name', validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired()])
    userName = StringField('User Name', validators=[DataRequired()])
