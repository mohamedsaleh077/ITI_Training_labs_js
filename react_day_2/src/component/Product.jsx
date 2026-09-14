import MyButton from "./button";

function selectBgColor(rate){
    return rate <= 4.5 ? "bg-gray-100" : "bg-red-100"
}

function priceView(product)
{
    if(product.originalPrice){
        return <>
            <span className="ml-3 line-through">${product.originalPrice}</span>
            <span className="ml-3 font-bold">${product.price}</span>
            <span className="ml-3 bg-red-600 text-white p-1"> -${product.discount}%</span>
        </>
    }

    return <>
            <span className="font-bold">${product.price}</span>
        </>
}

export default function Product({product})
{
    if(!product.inStock) return null;

    return <>
        <div className={`w-100 m-10 p-5 ${selectBgColor(product.rating)} flex flex-col justify-between`}>
            <div>
                <p className="font-bold text-2xl">{product.name}</p>
                <p className="text-xl mt-2 mb-2">Price: {priceView(product)}</p>
                <p>Rate: <span className="font-bold">{product.rating}</span></p>
                <p>{product.description}</p>
            </div>
            <div>
                <div class="flex items-center justify-center h-60 bg-black/90">
                    <img 
                        src={product.image}
                        alt={product.name} 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col items-center">
                    {/* <img className="object-cover h-70" src={`${product.image}`} alt="" /> */}
                    <MyButton className="w-70" BgColor={"bg-green-500"} Text="Add to Cart" />
                </div>
            </div>
        </div>
    </>
}