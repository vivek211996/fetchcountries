var title = document.createElement('title')
title.innerHTML = "Fetch-restcountries"
document.head.append(title)


var rcountries = fetch('https://restcountries.eu/rest/v2/all')

rcountries
	.then(function(data1)  {
		return data1.json()
	})
	.then(function(datajson) {
        var n=0
		var column = 4
		var nrows = Math.ceil(datajson.length / column)
        
		for (let i = 0; i < nrows; i++) {
			let row = document.createElement('div')
			row.setAttribute('class','row')
			
			for (let j = 0; j < column; j++) {
				let col = document.createElement('div')
				col.setAttribute('class','col-lg-3')
				

				var card = document.createElement('div')
				card.setAttribute('class','card')
				
				col.appendChild(card)

				var cheader = document.createElement('h4')
				cheader.classList.add('card-header','text-center')
				cheader.innerHTML = datajson[n].name
				card.appendChild(cheader)

				var cardBody = document.createElement('div')
				cardBody.classList.add('card-body', 'card-bg', 'text-center')
				card.appendChild(cardBody)

				var flag = document.createElement('img')
				flag.src = datajson[n].flag
				flag.classList.add('card-img-top')
				cardBody.appendChild(flag)

				var capital = document.createElement('div')
				capital.classList.add('h5')
				capital.innerHTML = 'Capital: ' + datajson[n].capital
				cardBody.append(capital)

				var conti = document.createElement('div')
				conti.classList.add('h5')
				conti.innerHTML = 'Continent: ' + datajson[n].region
				cardBody.append(conti)

				var currency = document.createElement('div')
				currency.classList.add('h5')
				currency.innerHTML = 'Currency: ' + datajson[n].currencies[0].name + '(' + datajson[n].currencies[0].symbol + ')'
				cardBody.append(currency)
                n++
                row.appendChild(col)
                
            }
            
			document.body.append(row)
        }
    
    })
