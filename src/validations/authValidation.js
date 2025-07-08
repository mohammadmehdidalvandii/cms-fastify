const validationName = (name)=>{
    const pattern = /^[a-zA-Z]{3,}$/;
    return pattern.test(name)
}

const validationEmail = (email)=>{
  const pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g;
  return pattern.test(email);   
}

const validationPhone = (phone)=>{
    const pattern = /^09\d{9}$/;
    return pattern.test(phone);
}

const validationPassword = (password)=>{
    const pattern = /^(?=.*\d)(?=.*[A-Z])[A-Za-z\d]{7,}$/;
    return pattern.test(password)
}

module.exports = {
    validationName,
    validationEmail,
    validationPhone,
    validationPassword,
}