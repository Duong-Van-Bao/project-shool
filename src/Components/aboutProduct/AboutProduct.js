import React, { Component } from 'react'

export default class AboutProduct extends Component {
    render() {
        return (
<div className="container">
  <div className="card">
    <div className="container-fliud">
      <div className="wrapper row">
        <div className="preview col-md-5">
          <div className="preview-pic tab-content">
            <div className="tab-pane active" id="pic-1"><img src="http://hocwebgiare.com/thiet_ke_web_chuan_demo/bootstrap_productdetail/images/doboafnuoicon_1.jpg" alt="" />
            </div>
            <div className="tab-pane" id="pic-2"><img src="http://hocwebgiare.com/thiet_ke_web_chuan_demo/bootstrap_productdetail/images/doboafnuoicon_4.jpg" alt="Học thiết kế web bán hàng Online" />
            </div>
            <div className="tab-pane" id="pic-3"><img src="http://hocwebgiare.com/thiet_ke_web_chuan_demo/bootstrap_productdetail/images/doboafnuoicon_5.jpg" alt="Học thiết kế web bán hàng Online" />
            </div>
            <div className="tab-pane" id="pic-4"><img src="http://hocwebgiare.com/thiet_ke_web_chuan_demo/bootstrap_productdetail/images/doboafnuoicon_6.jpg" alt="Học thiết kế web bán hàng Online" />
            </div>
            <div className="tab-pane" id="pic-5"><img src="http://hocwebgiare.com/thiet_ke_web_chuan_demo/bootstrap_productdetail/images/doboafnuoicon_7.jpg" alt="Học thiết kế web bán hàng Online" />
            </div>
          </div>
        </div>
        <div className="details col-md-7">
          <h3 className="product-title">Thời trang cho bé trai nhiều màu sắc ngộ nghĩnh</h3>
          <div className="home-product-item__sale-on">
            <span className="home-product-item__sale-om-percent">
              <p className="home-product-item-text">Mall</p>
            </span>
          </div>
          <div className="rating">
            <div className="stars"> <span className="fa fa-star checked" /> <span className="fa fa-star checked" />
              <span className="fa fa-star checked" /> <span className="fa fa-star" /> <span className="fa fa-star" />
            </div> <span className="review-no">123 đánh giá</span>
          </div>
          <div className="home-product-item__price">
            <span className="home-product-item__price-old">102.000đ</span>
            <span className="home-product-item__price-current">99.000đ</span>
          </div>
          <div className="content_produt">
            <p className="content_produt-Deal">Deal</p>
            <p className="content_produt-sell">Mua Kèm deal sốc</p>
          </div>
          <p />
          <div className="action">
            <nav className=" navbar-light">
              <div className="number_product">
                <p className="number_product-text">Số Lượng</p>
                <input style={{border: '1px solid #757575', borderRightColor: 'transparent'}} type="button" defaultValue="-" className="plus button is-form plus-button plus_button-form" />
                <input type="button" defaultValue={10} className="plus button is-form button_value" />
                <input style={{border: '1px solid #757575', borderLeftColor: 'transparent', marginRight: '18px'}} type="button" defaultValue="+" className="plus button is-form plus-button" />
                <p className="number_product-text">Số Lượng</p>
              </div>
              <div className="produt_button-sell">
                <a className="navbar-brand navbar-btn" href="#">
                  <button type="button" className="button_product">Mua Ngay</button>
                </a>
                <a className="navbar-brand" href="#">
                  <button type="button" className="btn_product"><i className="btn-icon fas fa-heart" /></button>
                </a>
              </div>
            </nav>              
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-product mt-5">
    <div className="woocommerce-tabs tabbed-content product_info">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active product_info-link" id="home-tab" data-toggle="tab" href="#descriptions" role="tab" aria-controls="home" aria-selected="true"> <p className="nav_link-text">Chi Tiết</p></a>
        </li>
        <li className="nav-item">
          <a className="nav-link product_info-link" id="profile-tab" data-toggle="tab" href="#dg" role="tab" aria-controls="profile" aria-selected="false">Đánh giá</a>
        </li>
        <li className="nav-item">
          <a className="nav-link product_info-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Cách nhận biết hàng chính hãng</a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <p>
            <strong>Bộ Dưỡng Tái Sinh Da Ohui The First Geniture Special Gwp
              3pcs</strong>
          </p>
          <p>
            Bộ mỹ phẩm OHUI Mini dưỡng trắng da The First 3 sản
            phẩm&nbsp;được đánh giá là một trong những set đang được nhiều
            người quan tâm nhất dành cho những người muốn làn da của mình
            trở lên trắng sáng và mịn màng nhất. Các thành phần được chiết
            xuất hoàn toàn từ thiên nhiên đem đến cho bạn yên tâm khi sử
            dụng kể cả với làn da nhạy cảm nhất.
          </p>
          <p>
            Đây là bộ&nbsp;ohui mini&nbsp;giúp cung cấp cho da của bạn đầy
            đủ nước ngoài ra nó còn có tác dụng thu nhỏ lỗ chân lông, làm mờ
            vết nhăn một cách đáng kể. Tác động trực tiếp tới quá trình tái
            tạo tế bào da mới ,loại bỏ các tế bào bị lão hóa đem lại một làn
            da mới trắng sáng hơn.
          </p>
          <p><strong>1.Xuất xứ</strong></p>
          <p>
            100% hàng chính hãng công ty. Sản xuất bởi công ty LG Vina
          </p>
          <p><strong>2. Thành phần</strong></p>
          <p>
            The First của sự kết hợp của OHUI cùng CHA – viện nghiên cứu tế
            bào mầm hàng đầu thế giới. Vì thế, đây chính là sản phẩm chứa
            đựng những thành phần và công nghệ vượt trội độc quyền trên thế
            giới giúp trẻ hóa làn da, chống lão hóa, săn chắc da, giảm nếp
            nhăn.
          </p>
          <p>
            Thành phần chủ đạo của bộ sản phẩm The First là siêu dung dịch
            nuôi dưỡng tế bào gốc tái tổ hợp. Đây là tác nhân giúp da tự tạo
            ra 29 nhân tố tăng trưởng. Tăng gấp 1.3 lần số lượng tế bào gốc.
            Đồng thời với kỹ thuật Transkin tăng khả năng thẩm thấu vào da
            gấp 5 lần. Kết hợp với Hoa Mẫu Đơn Trắng làm dịu da.
          </p>
          <p>
            Ohui The First Geniture bổ sung tinh chất vàng 24k chống nhăn
            chống lão hóa, cải thiện tận gốc mọi vấn đền của làn da, giúp
            tái sinh phục hồi làn da yếu ớt mẫn cảm.
          </p>
          <p><strong>3. Công dụng</strong></p>
          <p>
            + Thải độc tố cho da tái sinh phục hồi làn da sau khi bị mun,
            tổn thương da sẹo cấp độ 1 lỗ chân lông to , da mẫn cảm , mụn
            mẩn đỏ phù hợp tất cả loại da
          </p>
          <p>
            +&nbsp; Bạn nào da bị tổn thương do mụn, vết thâm , lỗ chân lông
            to … sài nhé , da mịn đẹp tac dụng chỉ sau 1 tháng sử dụng
          </p>
          <p>
            +Bên cạnh việc cung cấp đầy đủ nước cho da tinh khiết,my phẩm
            tái sinh da o hui này cũng có tác dụng:<br />
            – Thu nhỏ lỗ chân lông, làm mờ vết nhăn<br />
            – Làm mờ vết tàn nhang, vết thâm, vết nhăn nông, sẹo ở cấp độ
            1<br />
            – Làm trắng và sáng bóng da<br />
            – Tác động trực tiếp vào quá trình tái tạo tế bào da mới, thay
            thế toàn bộ các tế bào da bị lão hoá, ngăn ngừa sự tích tụ
            melanin.<br />
            – Khử mụn trứng cá và các chứng viêm da
          </p>
          <p><strong>4. Dùng cho loại da</strong></p>
          <p>– Da có nếp nhăn và bị chảy xệ</p>
          <p>– Da khô, sần sùi và kém đi độ mịn màng</p>
          <p>– Da sạm, không đều màu</p>
          <p>– Lỗ chân lông to và da mỏng dần</p>
          <p>
            – Da có dấu hiệu hình thành các vết nám và tàn nhang trên da
          </p>
          <p>
            -Làn da nhạy cảm hay bị dị ứng, mẩ đỏ, da vừa trải qua phi kim
            vô cùng yếu ớt
          </p>
          <p><strong>5.Set khuyến mãi gồm :</strong></p>
          <p>
            <em>1. Softener (Nước hoa hồng – 20ml) </em>: Cung cấp thêm 10
            loại axit amin nhằm phục hồi làn da mệt mỏi nhanh chóng, ngoài
            ra nó còn giúp điều chỉnh các nếp da một cách triệt để.
          </p>
          <p>
            <em>2. Emulsion (Sữa dưỡng da – 20ml) :</em> Có thêm thành phần
            sữa ong chúa giúp bảo vệ làn da tận sâu bên trong đem lại sự cân
            bằng cho da.
          </p>
          <p>
            <em>3. Cream (Kem dưỡng da – 7ml):</em> Cung cấp các dưỡng chất
            cần thiết cho làn da thô ráp nhằm đem đến cho bạn một làn da mềm
            mại, mịn màng.
          </p>
          <p><strong>6.Hạn sử dụng</strong></p>
          <p>nước hoa hồng &gt;sữa dưỡng &gt; kem dưỡng</p>
          <p><strong>7. Hạn sử dụng</strong></p>
          <p>Hàng mới tinh date 2022</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
        <div className="tab-pane fade" id="dg" role="tabpanel" aria-labelledby="profile-tab">
          <div className="col large-12" id="comments">
            <div>
              <h3 className="normal">Đánh giá</h3>
              <p className="woocommerce-noreviews">Chưa có đánh giá nào.</p>
            </div>
            <div id="review_form_wrapper" className="large-12 col">
              <div id="review_form" className="col-inner">
                <div className="review-form-inner has-border">
                  <div id="respond" className="comment-respond">
                    <h3 id="reply-title" className="comment-reply-title">
                      Hãy là người đầu tiên nhận xét “[Best Seller]Bộ Dưỡng
                      Tái Sinh Da Ohui The First Geniture Special Gwp 3pcs
                      Giải Pháp Chăm Sóc Toàn Diện, Nếp Nhăn ,Da Chùng, Và
                      Hồi Phục Làn Da Tươi Khỏe”
                      <small><a rel="nofollow" id="cancel-comment-reply-link" href="/san-pham/ohui-the-first-special-gwp-3pcs#respond" style={{display: 'none'}}>Hủy</a></small>
                    </h3>
                    <form action="https://myphamohui.com/wp-comments-post.php" method="post" id="commentform" className="comment-form" noValidate>
                      <div className="comment-form-rating">
                        <label htmlFor="rating">Đánh giá của bạn</label>
                        <p className="stars">
                          <span>
                            <a className="star-1" href="#">1</a>
                            <a className="star-2" href="#">2</a>
                            <a className="star-3" href="#">3</a>
                            <a className="star-4" href="#">4</a>
                            <a className="star-5" href="#">5</a>
                          </span>
                        </p>
                        <select name="rating" id="rating" required style={{display: 'none'}}>
                          <option value>Xếp hạng…</option>
                          <option value={5}>Rất tốt</option>
                          <option value={4}>Tốt</option>
                          <option value={3}>Trung bình</option>
                          <option value={2}>Không tệ</option>
                          <option value={1}>Rất tệ</option>
                        </select>
                      </div>
                      <p className="comment-form-comment">
                        <label htmlFor="comment">Nhận xét của bạn&nbsp;<span className="required">*</span></label><textarea id="comment" name="comment" cols={45} rows={8} required defaultValue={""} />
                      </p>
                      <p className="comment-form-author">
                        <label htmlFor="author">Tên&nbsp;<span className="required">*</span></label>
                        <input id="author" name="author" type="text" defaultValue size={30} required />
                      </p>
                      <p className="comment-form-email">
                        <label htmlFor="email">Email&nbsp;<span className="required">*</span></label>
                        <input id="email" name="email" type="email" defaultValue size={30} required />
                      </p>
                      <p className="comment-form-cookies-consent">
                        <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" defaultValue="yes" />
                        <label htmlFor="wp-comment-cookies-consent">Lưu tên của tôi, email, và trang web trong trình
                          duyệt này cho lần bình luận kế tiếp của
                          tôi.</label>
                      </p>
                      <p className="form-submit">
                        <input name="submit" type="submit" id="submit" className="submit" defaultValue="Gửi đi" />
                        <input type="hidden" name="comment_post_ID" defaultValue={342} id="comment_post_ID" />
                        <input type="hidden" name="comment_parent" id="comment_parent" defaultValue={0} />
                      </p>
                    </form>
                  </div>
                  {/* #respond */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
          <img className="aligncenter size-full wp-image-4850" src="https://myphamohui.com/wp-content/uploads/2018/11/my-pham-ohui-chinh-hang.png" alt="" width={1280} height={1280} />
        </div>
      </div>
      {/* .tab-panels */}
    </div>
  </div>
  <div className="home-product">
    <p className="text-table-product">Các Sản Phẩm Khác Của shop</p>
    <div className="row sm-gutter">
      {/* product-item */}
      <div className="col l-12 m-12 c-12">
        <div className="home-filter hide-on-mobile-tablet">
          <div className="home-product">
            <div className="row sm-gutter">
              {/* product-item */}
              <div className="col l-2-4 m-4 c-6">
                <a href="#" className="home-products"> 
                  <div className="home-product-item">
                    <div className="home-product-item__img" style={{backgroundImage: 'url(https://cf.shopee.vn/file/d98065b0a01a3275fb5227d03e9211ef_tn)'}} />
                    <h4 className="home-product-item__name">Tận hưởng các sản phẩm cao cấp và thiên nhiên được nhập khẩu từ Thái, Mỹ, Nhật - cho bạn một trải nghiệm chăm sóc cơ thể hoàn toàn mới.</h4>
                    <div className="home-product-item__price">
                      <span className="home-product-item__price-old">102.000đ</span>
                      <span className="home-product-item__price-current">99.000đ</span>
                    </div>
                    <div className="home-product-item__action">
                      <span className="home-product-item__like home-product-item__like--liked">
                        <i className="home-product-item__like-icon-empty far fa-heart" />
                        <i className="home-product-item__like-icon-fill fas fa-heart" />
                      </span>
                      <div className="home-product-item__rating">
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="fas fa-star" />
                        <span className="home-product-item_sold">88 đã bán</span>
                      </div>
                    </div>
                    <div className="home-product-item__origin">
                      <span className="home-product-item__brand">Whoo</span>
                      <span className="home-product-item__origin-name">Nhật Bản</span>         
                    </div>
                    <div className="home-product-item__favourit">
                      <i className="fas fa-check" />
                      <span>Yêu Thích</span>
                    </div>
                    <div className="home-product-item__sale-off">
                      <span className="home-product-item__sale-off-percent">
                        10%
                      </span>
                      <span className="home-product-item__sale-off-label">
                        Giảm
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col l-2-4 m-4 c-6">
                <a href="#" className="home-products">
                  <div className="home-product-item">
                    <div className="home-product-item__img" style={{backgroundImage: 'url(https://cf.shopee.vn/file/d98065b0a01a3275fb5227d03e9211ef_tn)'}} />
                    <h4 className="home-product-item__name">Tận hưởng các sản phẩm cao cấp và thiên nhiên được nhập khẩu từ Thái, Mỹ, Nhật - cho bạn một trải nghiệm chăm sóc cơ thể hoàn toàn mới.</h4>
                    <div className="home-product-item__price">
                      <span className="home-product-item__price-old">102.000đ</span>
                      <span className="home-product-item__price-current">99.000đ</span>
                    </div>
                    <div className="home-product-item__action">
                      <span className="home-product-item__like home-product-item__like--liked">
                        <i className="home-product-item__like-icon-empty far fa-heart" />
                        <i className="home-product-item__like-icon-fill fas fa-heart" />
                      </span>
                      <div className="home-product-item__rating">
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="fas fa-star" />
                        <span className="home-product-item_sold">88 đã bán</span>
                      </div>
                    </div>
                    <div className="home-product-item__origin">
                      <span className="home-product-item__brand">Whoo</span>
                      <span className="home-product-item__origin-name">Nhật Bản</span>         
                    </div>
                    <div className="home-product-item__favourit">
                      <i className="fas fa-check" />
                      <span>Yêu Thích</span>
                    </div>
                    <div className="home-product-item__sale-off">
                      <span className="home-product-item__sale-off-percent">
                        10%
                      </span>
                      <span className="home-product-item__sale-off-label">
                        Giảm
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col l-2-4 m-4 c-6">
                <a href="#" className="home-products">
                  <div className="home-product-item">
                    <div className="home-product-item__img" style={{backgroundImage: 'url(https://cf.shopee.vn/file/d98065b0a01a3275fb5227d03e9211ef_tn)'}} />
                    <h4 className="home-product-item__name">Tận hưởng các sản phẩm cao cấp và thiên nhiên được nhập khẩu từ Thái, Mỹ, Nhật - cho bạn một trải nghiệm chăm sóc cơ thể hoàn toàn mới.</h4>
                    <div className="home-product-item__price">
                      <span className="home-product-item__price-old">102.000đ</span>
                      <span className="home-product-item__price-current">99.000đ</span>
                    </div>
                    <div className="home-product-item__action">
                      <span className="home-product-item__like home-product-item__like--liked">
                        <i className="home-product-item__like-icon-empty far fa-heart" />
                        <i className="home-product-item__like-icon-fill fas fa-heart" />
                      </span>
                      <div className="home-product-item__rating">
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="fas fa-star" />
                        <span className="home-product-item_sold">88 đã bán</span>
                      </div>
                    </div>
                    <div className="home-product-item__origin">
                      <span className="home-product-item__brand">Whoo</span>
                      <span className="home-product-item__origin-name">Nhật Bản</span>         
                    </div>
                    <div className="home-product-item__favourit">
                      <i className="fas fa-check" />
                      <span>Yêu Thích</span>
                    </div>
                    <div className="home-product-item__sale-off">
                      <span className="home-product-item__sale-off-percent">
                        10%
                      </span>
                      <span className="home-product-item__sale-off-label">
                        Giảm
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col l-2-4 m-4 c-6">
                <a href="#" className="home-products">
                  <div className="home-product-item">
                    <div className="home-product-item__img" style={{backgroundImage: 'url(https://cf.shopee.vn/file/d98065b0a01a3275fb5227d03e9211ef_tn)'}} />
                    <h4 className="home-product-item__name">Tận hưởng các sản phẩm cao cấp và thiên nhiên được nhập khẩu từ Thái, Mỹ, Nhật - cho bạn một trải nghiệm chăm sóc cơ thể hoàn toàn mới.</h4>
                    <div className="home-product-item__price">
                      <span className="home-product-item__price-old">102.000đ</span>
                      <span className="home-product-item__price-current">99.000đ</span>
                    </div>
                    <div className="home-product-item__action">
                      <span className="home-product-item__like home-product-item__like--liked">
                        <i className="home-product-item__like-icon-empty far fa-heart" />
                        <i className="home-product-item__like-icon-fill fas fa-heart" />
                      </span>
                      <div className="home-product-item__rating">
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="fas fa-star" />
                        <span className="home-product-item_sold">88 đã bán</span>
                      </div>
                    </div>
                    <div className="home-product-item__origin">
                      <span className="home-product-item__brand">Whoo</span>
                      <span className="home-product-item__origin-name">Nhật Bản</span>         
                    </div>
                    <div className="home-product-item__favourit">
                      <i className="fas fa-check" />
                      <span>Yêu Thích</span>
                    </div>
                    <div className="home-product-item__sale-off">
                      <span className="home-product-item__sale-off-percent">
                        10%
                      </span>
                      <span className="home-product-item__sale-off-label">
                        Giảm
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col l-2-4 m-4 c-6">
                <a href="#" className="home-products">
                  <div className="home-product-item">
                    <div className="home-product-item__img" style={{backgroundImage: 'url(https://cf.shopee.vn/file/d98065b0a01a3275fb5227d03e9211ef_tn)'}} />
                    <h4 className="home-product-item__name">Tận hưởng các sản phẩm cao cấp và thiên nhiên được nhập khẩu từ Thái, Mỹ, Nhật - cho bạn một trải nghiệm chăm sóc cơ thể hoàn toàn mới.</h4>
                    <div className="home-product-item__price">
                      <span className="home-product-item__price-old">102.000đ</span>
                      <span className="home-product-item__price-current">99.000đ</span>
                    </div>
                    <div className="home-product-item__action">
                      <span className="home-product-item__like home-product-item__like--liked">
                        <i className="home-product-item__like-icon-empty far fa-heart" />
                        <i className="home-product-item__like-icon-fill fas fa-heart" />
                      </span>
                      <div className="home-product-item__rating">
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="fas fa-star" />
                        <span className="home-product-item_sold">88 đã bán</span>
                      </div>
                    </div>
                    <div className="home-product-item__origin">
                      <span className="home-product-item__brand">Whoo</span>
                      <span className="home-product-item__origin-name">Nhật Bản</span>         
                    </div>
                    <div className="home-product-item__favourit">
                      <i className="fas fa-check" />
                      <span>Yêu Thích</span>
                    </div>
                    <div className="home-product-item__sale-off">
                      <span className="home-product-item__sale-off-percent">
                        10%
                      </span>
                      <span className="home-product-item__sale-off-label">
                        Giảm
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col l-2-4 m-4 c-6">
                <a href="#" className="home-products">
                  <div className="home-product-item">
                    <div className="home-product-item__img" style={{backgroundImage: 'url(https://cf.shopee.vn/file/d98065b0a01a3275fb5227d03e9211ef_tn)'}} />
                    <h4 className="home-product-item__name">Tận hưởng các sản phẩm cao cấp và thiên nhiên được nhập khẩu từ Thái, Mỹ, Nhật - cho bạn một trải nghiệm chăm sóc cơ thể hoàn toàn mới.</h4>
                    <div className="home-product-item__price">
                      <span className="home-product-item__price-old">102.000đ</span>
                      <span className="home-product-item__price-current">99.000đ</span>
                    </div>
                    <div className="home-product-item__action">
                      <span className="home-product-item__like home-product-item__like--liked">
                        <i className="home-product-item__like-icon-empty far fa-heart" />
                        <i className="home-product-item__like-icon-fill fas fa-heart" />
                      </span>
                      <div className="home-product-item__rating">
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="fas fa-star" />
                        <span className="home-product-item_sold">88 đã bán</span>
                      </div>
                    </div>
                    <div className="home-product-item__origin">
                      <span className="home-product-item__brand">Whoo</span>
                      <span className="home-product-item__origin-name">Nhật Bản</span>         
                    </div>
                    <div className="home-product-item__favourit">
                      <i className="fas fa-check" />
                      <span>Yêu Thích</span>
                    </div>
                    <div className="home-product-item__sale-off">
                      <span className="home-product-item__sale-off-percent">
                        10%
                      </span>
                      <span className="home-product-item__sale-off-label">
                        Giảm
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col l-2-4 m-4 c-6">
                <a href="#" className="home-products">
                  <div className="home-product-item">
                    <div className="home-product-item__img" style={{backgroundImage: 'url(https://cf.shopee.vn/file/d98065b0a01a3275fb5227d03e9211ef_tn)'}} />
                    <h4 className="home-product-item__name">Tận hưởng các sản phẩm cao cấp và thiên nhiên được nhập khẩu từ Thái, Mỹ, Nhật - cho bạn một trải nghiệm chăm sóc cơ thể hoàn toàn mới.</h4>
                    <div className="home-product-item__price">
                      <span className="home-product-item__price-old">102.000đ</span>
                      <span className="home-product-item__price-current">99.000đ</span>
                    </div>
                    <div className="home-product-item__action">
                      <span className="home-product-item__like home-product-item__like--liked">
                        <i className="home-product-item__like-icon-empty far fa-heart" />
                        <i className="home-product-item__like-icon-fill fas fa-heart" />
                      </span>
                      <div className="home-product-item__rating">
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="fas fa-star" />
                        <span className="home-product-item_sold">88 đã bán</span>
                      </div>
                    </div>
                    <div className="home-product-item__origin">
                      <span className="home-product-item__brand">Whoo</span>
                      <span className="home-product-item__origin-name">Nhật Bản</span>         
                    </div>
                    <div className="home-product-item__favourit">
                      <i className="fas fa-check" />
                      <span>Yêu Thích</span>
                    </div>
                    <div className="home-product-item__sale-off">
                      <span className="home-product-item__sale-off-percent">
                        10%
                      </span>
                      <span className="home-product-item__sale-off-label">
                        Giảm
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col l-2-4 m-4 c-6">
                <a href="#" className="home-products">
                  <div className="home-product-item">
                    <div className="home-product-item__img" style={{backgroundImage: 'url(https://cf.shopee.vn/file/d98065b0a01a3275fb5227d03e9211ef_tn)'}} />
                    <h4 className="home-product-item__name">Tận hưởng các sản phẩm cao cấp và thiên nhiên được nhập khẩu từ Thái, Mỹ, Nhật - cho bạn một trải nghiệm chăm sóc cơ thể hoàn toàn mới.</h4>
                    <div className="home-product-item__price">
                      <span className="home-product-item__price-old">102.000đ</span>
                      <span className="home-product-item__price-current">99.000đ</span>
                    </div>
                    <div className="home-product-item__action">
                      <span className="home-product-item__like home-product-item__like--liked">
                        <i className="home-product-item__like-icon-empty far fa-heart" />
                        <i className="home-product-item__like-icon-fill fas fa-heart" />
                      </span>
                      <div className="home-product-item__rating">
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="fas fa-star" />
                        <span className="home-product-item_sold">88 đã bán</span>
                      </div>
                    </div>
                    <div className="home-product-item__origin">
                      <span className="home-product-item__brand">Whoo</span>
                      <span className="home-product-item__origin-name">Nhật Bản</span>         
                    </div>
                    <div className="home-product-item__favourit">
                      <i className="fas fa-check" />
                      <span>Yêu Thích</span>
                    </div>
                    <div className="home-product-item__sale-off">
                      <span className="home-product-item__sale-off-percent">
                        10%
                      </span>
                      <span className="home-product-item__sale-off-label">
                        Giảm
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col l-2-4 m-4 c-6">
                <a href="#" className="home-products">
                  <div className="home-product-item">
                    <div className="home-product-item__img" style={{backgroundImage: 'url(https://cf.shopee.vn/file/d98065b0a01a3275fb5227d03e9211ef_tn)'}} />
                    <h4 className="home-product-item__name">Tận hưởng các sản phẩm cao cấp và thiên nhiên được nhập khẩu từ Thái, Mỹ, Nhật - cho bạn một trải nghiệm chăm sóc cơ thể hoàn toàn mới.</h4>
                    <div className="home-product-item__price">
                      <span className="home-product-item__price-old">102.000đ</span>
                      <span className="home-product-item__price-current">99.000đ</span>
                    </div>
                    <div className="home-product-item__action">
                      <span className="home-product-item__like home-product-item__like--liked">
                        <i className="home-product-item__like-icon-empty far fa-heart" />
                        <i className="home-product-item__like-icon-fill fas fa-heart" />
                      </span>
                      <div className="home-product-item__rating">
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="fas fa-star" />
                        <span className="home-product-item_sold">88 đã bán</span>
                      </div>
                    </div>
                    <div className="home-product-item__origin">
                      <span className="home-product-item__brand">Whoo</span>
                      <span className="home-product-item__origin-name">Nhật Bản</span>         
                    </div>
                    <div className="home-product-item__favourit">
                      <i className="fas fa-check" />
                      <span>Yêu Thích</span>
                    </div>
                    <div className="home-product-item__sale-off">
                      <span className="home-product-item__sale-off-percent">
                        10%
                      </span>
                      <span className="home-product-item__sale-off-label">
                        Giảm
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col l-2-4 m-4 c-6">
                <a href="#" className="home-products">
                  <div className="home-product-item">
                    <div className="home-product-item__img" style={{backgroundImage: 'url(https://cf.shopee.vn/file/d98065b0a01a3275fb5227d03e9211ef_tn)'}} />
                    <h4 className="home-product-item__name">Tận hưởng các sản phẩm cao cấp và thiên nhiên được nhập khẩu từ Thái, Mỹ, Nhật - cho bạn một trải nghiệm chăm sóc cơ thể hoàn toàn mới.</h4>
                    <div className="home-product-item__price">
                      <span className="home-product-item__price-old">102.000đ</span>
                      <span className="home-product-item__price-current">99.000đ</span>
                    </div>
                    <div className="home-product-item__action">
                      <span className="home-product-item__like home-product-item__like--liked">
                        <i className="home-product-item__like-icon-empty far fa-heart" />
                        <i className="home-product-item__like-icon-fill fas fa-heart" />
                      </span>
                      <div className="home-product-item__rating">
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="fas fa-star" />
                        <span className="home-product-item_sold">88 đã bán</span>
                      </div>
                    </div>
                    <div className="home-product-item__origin">
                      <span className="home-product-item__brand">Whoo</span>
                      <span className="home-product-item__origin-name">Nhật Bản</span>         
                    </div>
                    <div className="home-product-item__favourit">
                      <i className="fas fa-check" />
                      <span>Yêu Thích</span>
                    </div>
                    <div className="home-product-item__sale-off">
                      <span className="home-product-item__sale-off-percent">
                        10%
                      </span>
                      <span className="home-product-item__sale-off-label">
                        Giảm
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col l-2-4 m-4 c-6">
                <a href="#" className="home-products">
                  <div className="home-product-item">
                    <div className="home-product-item__img" style={{backgroundImage: 'url(https://cf.shopee.vn/file/d98065b0a01a3275fb5227d03e9211ef_tn)'}} />
                    <h4 className="home-product-item__name">Tận hưởng các sản phẩm cao cấp và thiên nhiên được nhập khẩu từ Thái, Mỹ, Nhật - cho bạn một trải nghiệm chăm sóc cơ thể hoàn toàn mới.</h4>
                    <div className="home-product-item__price">
                      <span className="home-product-item__price-old">102.000đ</span>
                      <span className="home-product-item__price-current">99.000đ</span>
                    </div>
                    <div className="home-product-item__action">
                      <span className="home-product-item__like home-product-item__like--liked">
                        <i className="home-product-item__like-icon-empty far fa-heart" />
                        <i className="home-product-item__like-icon-fill fas fa-heart" />
                      </span>
                      <div className="home-product-item__rating">
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="fas fa-star" />
                        <span className="home-product-item_sold">88 đã bán</span>
                      </div>
                    </div>
                    <div className="home-product-item__origin">
                      <span className="home-product-item__brand">Whoo</span>
                      <span className="home-product-item__origin-name">Nhật Bản</span>         
                    </div>
                    <div className="home-product-item__favourit">
                      <i className="fas fa-check" />
                      <span>Yêu Thích</span>
                    </div>
                    <div className="home-product-item__sale-off">
                      <span className="home-product-item__sale-off-percent">
                        10%
                      </span>
                      <span className="home-product-item__sale-off-label">
                        Giảm
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col l-2-4 m-4 c-6">
                <a href="#" className="home-products">
                  <div className="home-product-item">
                    <div className="home-product-item__img" style={{backgroundImage: 'url(https://cf.shopee.vn/file/d98065b0a01a3275fb5227d03e9211ef_tn)'}} />
                    <h4 className="home-product-item__name">Tận hưởng các sản phẩm cao cấp và thiên nhiên được nhập khẩu từ Thái, Mỹ, Nhật - cho bạn một trải nghiệm chăm sóc cơ thể hoàn toàn mới.</h4>
                    <div className="home-product-item__price">
                      <span className="home-product-item__price-old">102.000đ</span>
                      <span className="home-product-item__price-current">99.000đ</span>
                    </div>
                    <div className="home-product-item__action">
                      <span className="home-product-item__like home-product-item__like--liked">
                        <i className="home-product-item__like-icon-empty far fa-heart" />
                        <i className="home-product-item__like-icon-fill fas fa-heart" />
                      </span>
                      <div className="home-product-item__rating">
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="home-product-item__rat-gold fas fa-star" />
                        <i className="fas fa-star" />
                        <span className="home-product-item_sold">88 đã bán</span>
                      </div>
                    </div>
                    <div className="home-product-item__origin">
                      <span className="home-product-item__brand">Whoo</span>
                      <span className="home-product-item__origin-name">Nhật Bản</span>         
                    </div>
                    <div className="home-product-item__favourit">
                      <i className="fas fa-check" />
                      <span>Yêu Thích</span>
                    </div>
                    <div className="home-product-item__sale-off">
                      <span className="home-product-item__sale-off-percent">
                        10%
                      </span>
                      <span className="home-product-item__sale-off-label">
                        Giảm
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></div>
        )
    }
}
