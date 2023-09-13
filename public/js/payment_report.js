
$(document).ready(function () {
    var myTable = $('#myTable').DataTable({
        
     
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf',
            {
                extend: "print",
                customize: function (win) {
    
                    var last = null;
                    var current = null;
                    var bod = [];
    
                    var css = '@page { size: landscape; }',
                        head = win.document.head || win.document.getElementsByTagName('head')[0],
                        style = win.document.createElement('style');
    
                    style.type = 'text/css';
                    style.media = 'print';
    
                    if (style.styleSheet) {
                        style.styleSheet.cssText = css;
                    }
                    else {
                        style.appendChild(win.document.createTextNode(css));
                    }
    
                    head.appendChild(style);
                }
            },
        ],
        'columnDefs': [
            {
                "targets": '_all',
                "createdCell": function (td) {
                    $(td).css('padding', '2px')
                }
            },
            {
                "targets": [0, 1],
                "className": "text-center",
    
            }
        ],
        "columns": [
            { "data": "col1" , 'width': "50%"},
            { "data": "col2", 'width': "50%" },
           
    
    
        ],
    });
});
