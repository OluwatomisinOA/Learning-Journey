import propertyForSaleArr from "./properties/propertyForSaleArr.js";
import placeholderPropertyObj from "./properties/placeholderPropertyObj.js";


function getPropertyHtml(propertyArr = [placeholderPropertyObj]) {

  return propertyArr.map((property) => {

    const { propertyLocation, priceGBP, roomsM2, comment, image } = property
    const totalRoomsM2 = property.roomsM2.reduce((total, current) => total + current)

    return `
      
      <section class="cards">
        <img src="images/${image}">
        <div class="desc">
          <h2>${propertyLocation}</h2>
          <h3>£${priceGBP}</h3>
          <p>${comment}</p>
          <h3>${totalRoomsM2}</h3>
        </div>
      </section>`

  })
}

document.getElementById('homes-container').innerHTML = getPropertyHtml(propertyForSaleArr)