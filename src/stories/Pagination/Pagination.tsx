import './pagination.css';
export interface PaginationProps { currentPage:number; totalPages:number; compact?:boolean; onPageChange?:(page:number)=>void; }
export const Pagination=({currentPage,totalPages,compact=false,onPageChange}:PaginationProps)=>{
  const safeTotal=Math.max(1,totalPages); const safeCurrent=Math.min(Math.max(1,currentPage),safeTotal);
  const pages=Array.from({length:Math.min(safeTotal,7)},(_,i)=>i+1);
  return <nav className={`ds-pagination ${compact?'ds-pagination--compact':''}`} aria-label="Pagination">
    <button type="button" aria-label="Previous page" disabled={safeCurrent===1} onClick={()=>onPageChange?.(safeCurrent-1)}>‹</button>
    {pages.map(page=><button key={page} type="button" aria-label={`Page ${page}`} aria-current={page===safeCurrent?'page':undefined} className={page===safeCurrent?'is-active':''} onClick={()=>onPageChange?.(page)}>{page}</button>)}
    <button type="button" aria-label="Next page" disabled={safeCurrent===safeTotal} onClick={()=>onPageChange?.(safeCurrent+1)}>›</button>
  </nav>;
};
