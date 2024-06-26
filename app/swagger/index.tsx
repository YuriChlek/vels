import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { createSwaggerSpec } from 'next-swagger-doc';
import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';


const SwaggerUI = dynamic<{
    spec: any;
    // @ts-ignore
}>(import('swagger-ui-react'), { ssr: false });

function Page({ spec }: InferGetStaticPropsType<typeof getStaticProps>) {
    return <SwaggerUI spec={spec} />;
}

export const getStaticProps: GetStaticProps = async () => {
    const spec: Record<string, any> = createSwaggerSpec({
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'Next Swagger API Example',
                version: '1.0',
            },
        },
        apis: [
            './server/api/*.js',
            './server/api/*.ts',
        ]
    });

    return {
        props: {
            spec,
        },
    };
};

export default Page;