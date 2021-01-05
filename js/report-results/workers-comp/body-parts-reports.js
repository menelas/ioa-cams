        $(document).ready( function () {
            var table = $('#body-top').DataTable({
                "order": [[ 0, "desc" ]],
                "dom": "",
                "paging": false
            });

            $('#body-top tbody tr:first-child td:first-child').addClass("sorting");
            $('#body-top tbody tr:first-child td:first-child').addClass("sorting_desc_custom");
            $('#body-top .sorting_desc_custom').click(function(e){
                $('#body-top .additional_align').attr('data-order', '1000');
                $(this).removeClass('sorting_desc_custom');
                $(this).removeClass('sorting');
                table.order([0,'asc']).draw();
                var first_td = $('#body-top tbody tr:first-child td:first-child');
                first_td.addClass('sorting_asc_custom');
                first_td.addClass('sorting');
                first_td.click(function(e){
                    $(this).removeClass('sorting_asc_custom');
                    $(this).removeClass('sorting');
                    table.order([0,'desc']).draw();
                    $('#body-top tbody tr:first-child td:first-child').addClass('sorting_desc_custom');
                    $('#body-top tbody tr:first-child td:first-child').addClass('sorting');
                });
            });

            var table1 = $('#body-middle').DataTable({
                "order": [[ 0, "desc" ]],
                "dom": "",
                "paging": false
            });

            $('#body-middle tbody tr:first-child td:first-child').addClass("sorting");
            $('#body-middle tbody tr:first-child td:first-child').addClass("sorting_desc_custom");
            $('#body-middle .sorting_desc_custom').click(function(e){
                $('#body-middle .additional_align').attr('data-order', '1000');
                $(this).removeClass('sorting_desc_custom');
                $(this).removeClass('sorting');
                table1.order([0,'asc']).draw();
                var first_td = $('#body-middle tbody tr:first-child td:first-child');
                first_td.addClass('sorting_asc_custom');
                first_td.addClass('sorting');
                first_td.click(function(e){
                    $(this).removeClass('sorting_asc_custom');
                    $(this).removeClass('sorting');
                    table1.order([0,'desc']).draw();
                    $('#body-middle tbody tr:first-child td:first-child').addClass('sorting_desc_custom');
                    $('#body-middle tbody tr:first-child td:first-child').addClass('sorting');
                });
            });


            var table2 = $('#body-bottom').DataTable({
                "order": [[ 0, "desc" ]],
                "dom": "",
                "paging": false
            });

            $('#body-bottom tbody tr:first-child td:first-child').addClass("sorting");
            $('#body-bottom tbody tr:first-child td:first-child').addClass("sorting_desc_custom");
            $('#body-bottom .sorting_desc_custom').click(function(e){
                $('#body-bottom .additional_align').attr('data-order', '1000');
                $(this).removeClass('sorting_desc_custom');
                $(this).removeClass('sorting');
                table2.order([0,'asc']).draw();
                var first_td = $('#body-bottom tbody tr:first-child td:first-child');
                first_td.addClass('sorting_asc_custom');
                first_td.addClass('sorting');
                first_td.click(function(e){
                    $(this).removeClass('sorting_asc_custom');
                    $(this).removeClass('sorting');
                    table2.order([0,'desc']).draw();
                    $('#body-bottom tbody tr:first-child td:first-child').addClass('sorting_desc_custom');
                    $('#body-bottom tbody tr:first-child td:first-child').addClass('sorting');
                });
            });
        });