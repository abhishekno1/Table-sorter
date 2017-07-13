document.addEventListener("DOMContentLoaded", function(event) { 
	var x = document.getElementsByClassName("table-sort")
	var z = x[0].getElementsByTagName('tr')				
	var a = Array()
	var click = 0
	var sel = document.querySelectorAll("th");
	var uni = ''
	var arrow = document.createElement('span')
	arrow.setAttribute('id','table_sort_arrow')

	for(let j = 0; j<= sel.length-1; j++){			
		sel[j].addEventListener("click", function(){			
			for(let i = 1; i < z.length; i++){					
				a.push(z[i].getElementsByTagName('td')[j].innerHTML)					
			}
			if(click == 0){					
				a.sort()
				click += 1
				uni = '&#9662;'
			}
			else if(click == 1){								
				a.reverse()					
				click -= 1
				uni = '&#9652;'
			}
			for(let k = 1; k<z.length; k++){					
				z[k].getElementsByTagName('td')[j].innerHTML = a[k-1]		
			}
			arrow.innerHTML = uni
			a.length = 0
			sel[j].appendChild(arrow)
		})	
	}
});
