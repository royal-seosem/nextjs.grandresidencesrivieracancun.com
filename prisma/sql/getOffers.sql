-- @name getHomeOffers
-- @param {DateTime} $1:today
-- @param {Int} $2:section_id
-- @param {String} $3:language1
-- @param {String} $4:language2

SELECT
    *
FROM
    gr_offer
        JOIN gr_offer_section ON gr_offer_section.gr_offer_id = gr_offer.id and gr_offer_section.gr_section_id = :section_id
        JOIN gr_offer_content ON gr_offer.id = gr_offer_content.gr_offer_id
WHERE
      :today BETWEEN start_date AND end_date
  AND (
          (:language1 = 'en' and show_es = 1 and url_es != '')
              OR (:language2 = 'es' and show_en = 1 and url_en != '')
          );