import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'

const Product = () => {
    return (
        <div>
            <h1 className="mt-2 bg-red-500 px-10">Produto</h1>
            <Button>Comprar produto</Button>
        </div>
    )
}

export default Product
