import { Grid } from '@material-ui/core';
import Image from 'next/image';

const TopPages = ({ pagetitle, image }) => {
    return (
        <div className='top-pages'>
            <section>
                <Grid container spacing={0} justify='center'>
                    <Grid item xs={10} sm={8} className='is-white'>
                        <h1 className='heading-1'>{pagetitle}</h1>
                    </Grid>
                </Grid>
            </section>
            <div className='background-overlay'></div>
            <Image
                src={`/images/${image}`}
                alt='Truck in front of a house'
                layout='fill'
                objectFit='cover'
                quality={100}
            />
        </div>
    );
};

export default TopPages;
