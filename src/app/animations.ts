import {
  trigger,
  animate,
  transition,
  style,
  query, group
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *',
    [query(':enter',
      [style({opacity: 0 })],
      {optional: true}),
      query(
        ':leave',
        [style({opacity: 1}),
        animate('0.3s', style({opacity: 1}))],
        {optional: true}
      )
])]);
export const slideTransitionAnimation = trigger('slideTransitionAnimation', [
  transition('* <=> *', [
    /* order */
    /* 1 */ query(':enter, :leave', style({ position: 'fixed', width: '100%' })
      , { optional: true }),
    /* 2 */ group([  // block executes in parallel
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
    ])
  ])
]);
