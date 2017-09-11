function Volunteer(first, last, phone, email, city, standOut, phoneBank, canvas) {

    var concat = first.toString() + last.toString() + phone.toString() + email.toString() + city.toString();

    this.Id = concat.hashCode();

    this.FirstName = first;
    this.LastName = last;
    this.Phone = phone;
    this.Email = email;
    this.City = city;

    if (typeof standOut === 'undefined') standout = false;
    this.Standout = standOut;

    if (typeof phoneBank === 'undefined') phoneBank = false;
    this.PhoneBank = phoneBank;

    if (typeof canvas === 'undefined') canvas = false;
    this.Canvas = canvas;
}