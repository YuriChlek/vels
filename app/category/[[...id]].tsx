import { useRouter } from 'next/router';

const CategoryPage = () => {
    const router = useRouter();
    const { id } = router.query;

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