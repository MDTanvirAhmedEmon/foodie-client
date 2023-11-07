/* eslint-disable react/prop-types */

import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function Pagination({ active, setActive, totalData }) {
    const totalPage = Math.ceil(totalData / 10);

    const getItemProps = (index) => ({
      variant: active === index ? "filled" : "text",
      color: "gray",
      onClick: () => setActive(index),
    });
  
    const next = () => {
      if (active === totalPage) return;
      setActive(active + 1);
    };
  
    const prev = () => {
      if (active === 1) return;
      setActive(active - 1);
    };
  
    const pageNumbers = Array.from({ length: totalPage }, (_, i) => i + 1);
  
    return (
      <div className="flex items-center gap-4">
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
        </Button>
        <div className="flex items-center gap-2">
          {pageNumbers.map((page) => (
            <IconButton key={page} {...getItemProps(page)}>
              {page}
            </IconButton>
          ))}
        </div>
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={next}
          disabled={active === totalPage}
        >
          Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>
  );
}
