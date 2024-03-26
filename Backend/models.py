from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
# from sqlalchemy.ext.associationproxy import associatpipenion_proxy
from sqlalchemy_serializer import SerializerMixin


metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)


class User(db.Model, SerializerMixin):
    __tablename__ = 'user_table'

    id = db.Column(db.Integer, primary_key = True)
    first = db.Column(db.String, nullable = False)
    last = db.Column(db.String, nullable = False)
    email = db.Column(db.String)
    username = db.Column(db.String, nullable = False)
    password = db.Column(db.String, nullable = False)
    # itinerary = db.Column(db.String)

    trips = db.relationship('Trips', back_populates='user')
    hotels = db.relationship('Hotels', back_populates='user')
    flights = db.relationship('Flights', back_populates='user')
    cards = db.relationship('Cards', back_populates='user')



class Trips(db.Model, SerializerMixin):
    __tablename__ = 'trips_table'

    id = db.Column(db.Integer, primary_key = True)
    place = db.Column(db.String, nullable = False)
    groupType = db.Column(db.String)
    groupSize = db.Column(db.Integer)
    dates = db.Column(db.Integer, nullable = False)

    food = db.Column(db.String)
    entertainment = db.Column(db.String)
    nightlife = db.Column(db.String)
    culture = db.Column(db.String)

    user_id = db.Column(db.Integer, db.ForeignKey('user_table.id'))
    user = db.relationship('User', back_populates = 'trips')




class Flights(db.Model, SerializerMixin):
    __tablename__ = 'flights_table'

    id = db.Column(db.Integer, primary_key = True)
    flightPrice = db.Column(db.Integer)
    flightStops = db.Column(db.Integer)
    flightAirline = db.Column(db.String)

    user_id = db.Column(db.Integer, db.ForeignKey('user_table.id'))
    user = db.relationship('User', back_populates = 'flights')




class Hotels(db.Model, SerializerMixin):
    __tablename__ = 'hotels_table'

    id = db.Column(db.Integer, primary_key = True)

    hotelPrice = db.Column(db.Integer)
    hotelRating = db.Column(db.Integer)
    hotelLocation = db.Column(db.String)

    creditCard = db.Column(db.String)

    user_id = db.Column(db.Integer, db.ForeignKey('user_table.id'))
    user = db.relationship('User', back_populates = 'hotels')
    


class Cards(db.Model, SerializerMixin):
    __tablename__ = 'credit_cards_table'

    id = db.Column(db.Integer, primary_key = True)

    cardName = db.Column(db.String, nullable = False)
    points = db.Column(db.Integer)

    user_id = db.Column(db.Integer, db.ForeignKey('user_table.id'))
    user = db.relationship('User', back_populates = 'cards')

