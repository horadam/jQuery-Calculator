$(function(){

    $("#num1").on('change', function(e){
        if (isNaN($(this).val())) {
            $("#num1").addClass("error")
            $("#answer").html("Please enter only numbers")
        } else {
            $("#num1").removeClass("error")
            $("#answer").html("")
        }

    })

    $("#num2").on('change', function(e){
        if (isNaN($(this).val())) {
            $("#num2").addClass("error")
            $("#answer").html("Please enter only numbers")
        } else {
            $("#num2").removeClass("error")
            $("#answer").html("")
        }

    })

    
    $("#add").on('click', function(e){
        e.preventDefault()

        var num1 = Number($("#num1").val())
        var num2 = Number($("#num2").val())

        if (isNaN(num1) || isNaN(num2)) {
            $("#answer").html("Please enter only numbers")
        } else {
            $("#answer").html(num1 + num2)
        }
    })

    $("#subtract").on('click', function(e){
        e.preventDefault()

        var num1 = Number($("#num1").val())
        var num2 = Number($("#num2").val())

        if (isNaN(num1) || isNaN(num2)) {
            $("#answer").html("Please enter only numbers")
        } else {
            $("#answer").html(num1 - num2)
        }
    })

    $("#multiply").on('click', function(e){
        e.preventDefault()

        var num1 = Number($("#num1").val())
        var num2 = Number($("#num2").val())

        if (isNaN(num1) || isNaN(num2)) {
            $("#answer").html("Please enter only numbers")
        } else {
            $("#answer").html(num1 * num2)
        }
    })

    $("#divide").on('click', function(e){
        e.preventDefault()

        var num1 = Number($("#num1").val())
        var num2 = Number($("#num2").val())

        if (isNaN(num1) || isNaN(num2)) {
            $("#answer").html("Please enter only numbers")
        } else {
            $("#answer").html(num1 / num2)
        }
    })

})