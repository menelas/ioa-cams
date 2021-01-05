function loccheck() {
    $('#location_c').hide();
    $('#physical_address_c').hide();
    $('#place_injury_c').hide();
    $('#address_c').hide();
    if ($('input[name=employer_premises]:checked').length > 0) {
        var employer_premises = $('input[name="employer_premises"]:checked').val();
        if (employer_premises == 'Yes') {

            $('#location_c').show();
            $('input:radio[name=physical_address]:checked').prop('checked', false);
        }
        if (employer_premises == 'No') {
            $('#physical_address_c').show();
        }
    }
    if ($('input[name=physical_address]:checked').length > 0 && $('input[name=employer_premises]:checked').length > 0) {
        var employer_premises = $('input[name="employer_premises"]:checked').val();
        var physical_address = $('input[name="physical_address"]:checked').val();
        if (physical_address == 'Yes' && employer_premises == 'No') {
            $('#address_c').show();
        }
        if (physical_address == 'No' && employer_premises == 'No') {
            $('#place_injury_c').show();
        }
    }

}