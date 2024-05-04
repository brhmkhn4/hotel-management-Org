import { type SchemaTypeDefinition } from 'sanity'
import accounts from "../../../../schemas/account"
import booking from "../../../../schemas/booking"
import hotelRoom from "../../../../schemas/hotelRoom"
import review from "../../../../schemas/review"
import user from "../../../../schemas/user"
import verificationToken from "../../../../schemas/verificationToken"


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [accounts, booking, hotelRoom, review, user, verificationToken],
}
