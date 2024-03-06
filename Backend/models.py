from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin


metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)


class User(db.Model, SerializerMixin):
    __tablename__ = 'user_table'

    id = db.Column(db.Integer, primary_key = True)
    fName = db.Column(db.String, nullable = False)
    lName = db.Column(db.String, nullable = False)
    email = db.Column(db.String)
    userName = db.Column(db.String, nullable = False)
    password = db.Column(db.String, nullable = False)


class Trips(db.Modal, SerializerMixin):
    __tablename__ = 'trips_table'

    id = db.Column(db.Integer, primary_key = True)
    place = db.Column(db.String, nullable = False)
    groupType = db.Column(db.String)
    groupSize = db.Column(db.String)
    dates = db.Column(db.Integer, nullable = False)

    food = db.Column(db.String)
    entertainment = db.Column(db.String)
    nightlife = db.Column(db.String)
    culture = db.Column(db.String)

    flightPrice = db.Column(db.Integer)
    flightStops = db.Column(db.Integer)
    flightAirline = db.Column(db.String)

    hotelPrice = db.Column(db.Integer)
    hotelRating = db.Column(db.Integer)
    hotelLocation = db.Column(db.String)

    

