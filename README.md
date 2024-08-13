# Filtro com expressão regular

### update 13/08/2024
```javascript

    function handleSearchInput(event) {
      const searchTerm = event.target.value.trim().toLowerCase();
      const rows = document.querySelectorAll("#confirmar_contend_table tr");
  
      rows.forEach(row => {
          if (row.querySelector("th")) return; // ignora a linha que tem th
  
          const rowText = row.textContent.toLowerCase();
          row.style.display = rowText.includes(searchTerm) ? "" : "none"; // solução mais simples, sem necessidade de expressão regular
      });
  }

  const searchInput = document.getElementById("imput_busca_chegada");  
  searchInput.addEventListener("input", handleSearchInput);

 ```


Filtrando elementos html em uma lista qualquer usando expressão regular
![demostraçao_filtro](https://user-images.githubusercontent.com/9409514/76483175-147b8c80-63f5-11ea-84dd-4830ed351e94.gif)
```javascript
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
   ```

### A parte do codigo mais relevante

```javascript
    let text = $(row).text() // pega todo texto da linha(tr)
                     .toLowerCase() // transforma em caixa baixa                                    
                     .match(eval("/" + value_search + "/")); // usa uma expresão regular para saber se o conjunto de caracteres do input contem no texto da linha atual
```

É algo muito simples, mas muito eficiente. Como já é sabido, a função **text()** remove toda liguagem de marcação, deixando apenas o texto, e logo após é chamada a função **match()** que recebe uma expressão regular como paramento.

Expressões regulares serve para validar entradas de dados ou fazer busca e extração de informações em textos, no nosso caso queremos saber se o texto retornado pela função **text()** contém o conjunto de caracteres que estamos buscando, e essa é a expressão mais simples que consegui pensar "**/valor/**", só que no lugar de "valor" temos que colocar o valor da variavel **value_search**, mas não podemos concatenar ela em nossa expressão, já que nas expressões regulares o simbolo "**+**" tem outro significado, a solução é criar uma expressão em uma string **"/" + value_search + "/"**, assim podemos concatenar, e por fim utilizamos a função **eval()**, que recebe a nossa expressão em string **eval("/" + value_search + "/")** e retorna com nossa Expressão Regular quentinha para a função **match()**, e se a função **match()** não encontrar nada ela retorna null.
    
