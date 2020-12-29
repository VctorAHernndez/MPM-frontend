import moment from 'moment';

export function prepareAppointmentBody(firstName, lastName, gender, phone, DOB, date, time, reason, providerID) {

  const formattedDate = date.format('YYYY-MM-DD');
  const formattedTime = time.format('HH:mmZ');
  const startDateTime = moment(formattedDate + 'T' + formattedTime).format();
  const endDateTime = moment(startDateTime).add(1, 'hour').format(); // offset by 1 hour

  const body = {
    start_time: startDateTime,
    end_time: endDateTime, // "2020-12-16T03:30:00Z"
    appointment_reason: reason,
    patient_full_name: firstName + ' ' + lastName,
    patient_gender: gender,
    patient_date_of_birth: DOB.format('YYYY-MM-DD'),
    patient_phone_number: phone,
    provider: providerID,
  }

  return body;
  
}
