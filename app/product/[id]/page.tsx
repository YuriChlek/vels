'use client';
import { useRouter } from 'next/navigation';

const ProductPage = (options: any) => {
    const router = useRouter();
    const  id  = 123;

    console.log(options.params)

    const product = {
        id,
        name: `Product ${id}`,
        description: `Product description ${id}.`,
    };

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
        </div>
    );
};

export default ProductPage;