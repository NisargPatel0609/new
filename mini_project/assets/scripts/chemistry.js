let data = axios.get("../../data/elements.json");
data.then((res) => {
   elements = res.data.elements;
  elements.map((element) => {
    let ele_div = document.createElement("div");
    let ele_number = document.createElement("div");
    let ele_symbol = document.createElement("div");
    let ele_name = document.createElement("div");
    let ele_atomicMass = document.createElement("div");
 
    ele_div.onclick = () => {
      window.location.href = `/pages/element-details.html?number=${element.number}`;
    };
    
    let temp = element.category.split(" ");
    let category = temp.join("_");
    ele_div.classList.add(category);
    ele_div.classList.add("atomic_element");
    ele_div.style.gridRow = element.ypos;
    ele_div.style.gridColumn = element.xpos;
    ele_symbol.style.margin = '0.3rem 0'

    ele_number.className = "atomic_element-number"	
    ele_symbol.className = "atomic_element-symbol"	
    ele_name.className = "atomic_element-name"	
    ele_atomicMass.className = "atomic_element-atomicMass"	

    ele_number.innerText = element.number;
    ele_symbol.innerText = element.symbol;
    ele_name.innerText = element.name;
    ele_atomicMass.innerText = element.atomic_mass;

    ele_div.append(ele_number, ele_symbol, ele_name, ele_atomicMass);
    let periodic_table = document.getElementById("periodic_table");
    periodic_table.appendChild(ele_div);
  });
});


let elements = []
let searchBar = document.getElementById("search_input")
let searchItem = document.getElementById("searchItems")

let result;
searchBar.addEventListener('input',function(){
  searchItem.innerHTML = ''
  result = []
  elements.filter((ele)=>{
    if(ele.name.toLowerCase().includes(searchBar.value.toLowerCase()) && searchBar.value !== ''){
      result.push(ele)
    }
  })

  result.map((e)=>{
    let item = document.createElement('div')
    let itemUrl = document.createElement('a')
    itemUrl.innerText = e.name
    itemUrl.href = `/pages/element-details.html?number=${e.number}`
    item.appendChild(itemUrl)
    item.className = 'item'
    searchItem.appendChild(item)
  })
})

document.addEventListener('click', function handleClickOutsideBox(event) {
  const box = document.getElementById('searchItems');
  const inp = document.getElementById('search_input')
  if (!box.contains(event.target) && !inp.contains(event.target)) {
    box.style.display = 'none';
  }
  else{
    box.style.display = 'block'
  }
});