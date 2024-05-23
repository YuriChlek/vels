import { useRouter } from 'next/navigation';

const CategoryPage = (id: number | string) => {
    const router = useRouter();
    //const id = router;

    const category = {
        id,
        name: `Category id ${id}`,
        description: `Category description ${id}.`,
    };

    return (
        <div>
            <h1>{category.name}</h1>
            <p>{category.description}</p>
        </div>
    );
};

export default CategoryPage;