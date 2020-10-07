var defangIPaddr = function(address) {
    return address.split('.').join('[.]')
    // return address.replace(/[.]/g,'[.]')
};
