"use client";
import React, { useEffect } from "react";
import Link from "next/link";
//= Scripts
import tooltipEffect from "@/common/tooltipEffect";

function WorksStyle1() {
	useEffect(() => {
		tooltipEffect();
	}, []);

	return (
		<section className="works section-padding pb-70">
			<div className="container">
				<div className="row lg-space">
					
					<div className="col-lg-6 col-md-6 valign">
						<div className="item">
							<a
								href="https://gems.edu.np/gems-csr"
								target="_blank"
							>
								<div
									className="img"
									data-tooltip-tit="Work image"
									data-tooltip-sub="csr"
								>
									<img
										src="/img/clients/csr/life-vision.png"
										alt="life-vision.png"
									/>
									<p>
										Life Vision Academy, Bishankhunarayan.
									</p>
								</div>
							</a>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<div className="item">
							<a
								href="https://gems.edu.np/gems-csr"
								target="_blank"
							>
								<div
									className="img"
									data-tooltip-tit="Work image"
									data-tooltip-sub="Design"
								>
									<img
										src="/img/clients/csr/ManavSewaAshra.jpg"
										alt="manav"
									/>
									<p>Manav Sewa Ashram, Dhapakhel.</p>
								</div>
							</a>
						</div>
					</div>
          <div className="col-lg-12 col-md-6">
						<div className="item">
							<a
								href="https://gems.edu.np/gems-csr"
								target="_blank"
							>
								<div
									className="img"
									data-tooltip-tit="Work image"
									data-tooltip-sub="csr"
								>
									<img
										src="/img/clients/csr/shree-krishna.jpg"
										alt="shree"
									/>
									<p>
										Shree Krishna Madhyamik Vidhyalaya,
										Lalitpur.
									</p>
								</div>
							</a>
						</div>
					</div>
					{/* <div className="col-lg-4 col-md-6 valign">
						<div className="item">
							<Link href="/project-details2/project-details2-dark">
								<div
									className="img"
									data-tooltip-tit="Work image"
									data-tooltip-sub="Design"
								>
									<img
										src="/img/portfolio/portfolio/2/3.jpg"
										alt=""
									/>
								</div>
							</Link>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="item">
							<Link href="/project-details2/project-details2-dark">
								<div
									className="img"
									data-tooltip-tit="Work image"
									data-tooltip-sub="Design"
								>
									<img
										src="/img/portfolio/portfolio/1/3.jpg"
										alt=""
									/>
								</div>
							</Link>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 valign">
						<div className="item">
							<Link href="/project-details2/project-details2-dark">
								<div
									className="img"
									data-tooltip-tit="Work image"
									data-tooltip-sub="Design"
								>
									<img
										src="/img/portfolio/portfolio/2/4.jpg"
										alt=""
									/>
								</div>
							</Link>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="item">
							<Link href="/project-details2/project-details2-dark">
								<div
									className="img"
									data-tooltip-tit="Work image"
									data-tooltip-sub="Design"
								>
									<img
										src="/img/portfolio/portfolio/1/4.jpg"
										alt=""
									/>
								</div>
							</Link>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 valign">
						<div className="item">
							<Link href="/project-details2/project-details2-dark">
								<div
									className="img"
									data-tooltip-tit="Work image"
									data-tooltip-sub="Design"
								>
									<img
										src="/img/portfolio/portfolio/2/5.jpg"
										alt=""
									/>
								</div>
							</Link>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="item">
							<Link href="/project-details2/project-details2-dark">
								<div
									className="img"
									data-tooltip-tit="Work image"
									data-tooltip-sub="Design"
								>
									<img
										src="/img/portfolio/portfolio/1/5.jpg"
										alt=""
									/>
								</div>
							</Link>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
}

export default WorksStyle1;
