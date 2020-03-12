$(document).ready(()=>{

    $("#input_busca").on("input", function() {

        let value_search = $(this).val(); // pega o valor do input
        value_search = value_search.trim().toLowerCase() // remove os espaços(trim) e coloca todos os caracteres em caixa baixa(toLowerCase)

     
        let rows = document.querySelectorAll("#table_list tr"); // seleciona todas as linhas da tabela

        rows.forEach((row) => { // pecorre uma por uma 
         
                if (value_search != "") {   // se o input não estiver vazio				

                    let text = $(row).text() // pega todo texto da linha(tr)
                                     .toLowerCase() // transforma em caixa baixa                                    
                                     .match(eval("/" + value_search + "/")); // usa uma expresão regular para saber se o conjunto de caracteres do input contem no texto da linha atual
                    if (text != null) { // se não for nullo mostra a linha			

                        $(row).fadeIn(200, null)

                    } else {
                        $(row).fadeOut(200, null); // se for nullo esconde a linha

                    }
                } else {
                    $(row).fadeIn(200, null) // se o input estiver vazio mostra tudo novamente				
                }




        })
    
    })
})