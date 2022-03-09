from sqlalchemy import Boolean, ForeignKey, Integer, String, Text, Float
from sqlalchemy.sql.schema import Column
from database import Base


class Item(Base):
    __tablename__ = "items"

    id = Column(Integer, primary_key=True, index=True, nullable=False, unique=True)
    prod_name = Column(String, nullable=False, index=True)
    prod_description = Column(Text)
    prod_price = Column(String)

    def rep_data(self):
        return f"Prod Name:{self.prod_name} | Prod Price: {self.prod_price}"