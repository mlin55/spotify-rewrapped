import { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

function ListComponent({ idx, image, mainText, subText }) {
  return (
    <div class='flex items-center p-4'>
      <h1 class='text-3xl font-bold pr-5 min-w-16'>{idx + 1}</h1>
      {image && <img src={image} class="w-32 h-32" />}
      <div class='pl-5'>
        <h1 class='font-bold'>{mainText}</h1>
        <p>{subText}</p>
      </div>
    </div>
  );
}

export default function List({ list, numUnexpanded }) {

  const [isExpanded, setExpanded] = useState(false);

  function toggleList() {
    setExpanded(!isExpanded);
  }
  {/* Make smooth expand and collapse, improve button look */}

  return (
    <>
     <ol>
        {list.slice(0, Math.min(numUnexpanded, list.length)).map((item, idx) => <li>{<ListComponent idx={idx} image={item.image} mainText={item.mainText} subText={item.subText} />}</li>)}
        {isExpanded && list.slice(numUnexpanded, list.length).map((item, idx) => <li>{<ListComponent idx={idx + numUnexpanded} image={item.image} mainText={item.mainText} subText={item.subText} />}</li>)}
      </ol>
      <button className="flex items-center pb-60" onClick={() => toggleList()}>
        {isExpanded ? (
          <>
            <ChevronUpIcon className="w-5 h-5 ml-2" />
          </>
        ) : (
          <>
            <ChevronDownIcon className="w-5 h-5 ml-2" />
          </>
        )}
      </button>
    </>
  );
}