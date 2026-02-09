import Link from "next/link";

export const metadata = {
  title: "MovieSir | 이태수",
  description: "AI 영화 추천 B2B API 서비스 - 인프라 설계 및 CI/CD 구축",
};

export default function MovieSirPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors mb-12 group"
        >
          <svg
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-sm">Projects</span>
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">MovieSir</h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            AI 기반 영화 추천 B2B API 서비스의 인프라 설계 및 운영
          </p>
        </div>

        {/* Overview */}
        <div className="mb-12 text-sm space-y-1">
          <p>
            <span className="text-gray-400">프로젝트 기간:</span>{" "}
            <span className="text-gray-700">2025.12 - 2026.02</span>
          </p>
          <p>
            <span className="text-gray-400">팀원:</span>{" "}
            <span className="text-gray-700">5명</span>
          </p>
          <p>
            <span className="text-gray-400">역할:</span>{" "}
            <span className="text-gray-700">인프라 · CI/CD · 보안</span>
          </p>
          <div className="flex flex-wrap gap-2 pt-3 mb-4">
            {["KakaoCloud", "Docker", "GitHub Actions", "Nginx", "PostgreSQL", "Redis", "Let's Encrypt", "fail2ban"].map((tech) => (
              <span key={tech} className="px-2.5 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3 pt-1">
            <Link
              href="https://moviesir.cloud"
              target="_blank"
              className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:border-gray-400 hover:text-gray-900 transition-colors"
            >
              Service
            </Link>
            <Link
              href="https://github.com/Movigation/MovieSir"
              target="_blank"
              className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:border-gray-400 hover:text-gray-900 transition-colors"
            >
              GitHub
            </Link>
          </div>
        </div>

        <hr className="border-t border-gray-300 mb-12" />

        {/* 핵심 성과 */}
        <section className="mb-16 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-lg font-bold text-gray-900 mb-4">핵심 성과</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white rounded-lg text-center">
              <p className="text-2xl font-bold text-gray-900">5,227 → 0</p>
              <p className="text-sm text-gray-500">SSH 공격 차단</p>
            </div>
            <div className="p-4 bg-white rounded-lg text-center">
              <p className="text-2xl font-bold text-gray-900">92%</p>
              <p className="text-sm text-gray-500">이미지 경량화</p>
            </div>
            <div className="p-4 bg-white rounded-lg text-center">
              <p className="text-2xl font-bold text-gray-900">~245ms</p>
              <p className="text-sm text-gray-500">API 응답시간</p>
            </div>
            <div className="p-4 bg-white rounded-lg text-center">
              <p className="text-2xl font-bold text-gray-900">83%</p>
              <p className="text-sm text-gray-500">배포 시간 단축</p>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-300 mb-16" />

        {/* 인프라 아키텍처 */}
        <section className="mb-16">
          <h2 className="text-lg font-bold text-gray-900 mb-4 border-l-4 border-gray-900 pl-3">
            인프라 아키텍처
          </h2>
          <img
            src="/images/moviesir_infra_arch.png"
            alt="MovieSir 인프라 아키텍처"
            className="w-full rounded-lg mb-4"
          />
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            {/* VPC Header */}
            <div className="bg-gray-900 px-4 py-3">
              <p className="text-white font-medium">
                KakaoCloud VPC
                <span className="text-gray-400 font-normal ml-2 text-sm">10.0.0.0/16</span>
              </p>
            </div>

            {/* Server Table */}
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left text-gray-500 font-medium w-1/4">서버</th>
                  <th className="px-4 py-3 text-left text-gray-500 font-medium w-1/4">Subnet</th>
                  <th className="px-4 py-3 text-left text-gray-500 font-medium">서비스 (포트)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-4 align-middle">
                    <p className="font-semibold text-gray-900">App Server</p>
                    <p className="text-xs text-gray-400 mt-1">Bastion Host</p>
                  </td>
                  <td className="px-4 py-4 align-middle">
                    <span className="inline-block px-2 py-0.5 bg-gray-900 text-white text-xs rounded-full font-medium">Public</span>
                    <p className="text-xs text-gray-400 mt-1 font-mono">10.0.0.0/20</p>
                  </td>
                  <td className="px-4 py-4">
                    <p className="text-xs text-gray-500 mb-2 font-medium">보안그룹</p>
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-1 text-left text-gray-400 font-normal">프로토콜</th>
                          <th className="py-1 text-left text-gray-400 font-normal">출발지</th>
                          <th className="py-1 text-left text-gray-400 font-normal">포트</th>
                          <th className="py-1 text-left text-gray-400 font-normal">설명</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="py-1 text-gray-600">TCP</td>
                          <td className="py-1 text-gray-600 font-mono">0.0.0.0/0</td>
                          <td className="py-1 text-gray-900 font-medium">80</td>
                          <td className="py-1 text-gray-600">HTTP</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-gray-600">TCP</td>
                          <td className="py-1 text-gray-600 font-mono">0.0.0.0/0</td>
                          <td className="py-1 text-gray-900 font-medium">443</td>
                          <td className="py-1 text-gray-600">HTTPS</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-gray-600">TCP</td>
                          <td className="py-1 text-gray-600 font-mono">0.0.0.0/0</td>
                          <td className="py-1 text-gray-900 font-medium">52222</td>
                          <td className="py-1 text-gray-600">SSH</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 align-middle">
                    <p className="font-semibold text-gray-900">GPU Server</p>
                    <p className="text-xs text-gray-400 mt-1">Tesla T4 16GB</p>
                  </td>
                  <td className="px-4 py-4 align-middle">
                    <span className="inline-block px-2 py-0.5 bg-gray-200 text-gray-600 text-xs rounded-full font-medium">Private</span>
                    <p className="text-xs text-gray-400 mt-1 font-mono">10.0.32.0/20</p>
                  </td>
                  <td className="px-4 py-4">
                    <p className="text-xs text-gray-500 mb-2 font-medium">보안그룹</p>
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-1 text-left text-gray-400 font-normal">프로토콜</th>
                          <th className="py-1 text-left text-gray-400 font-normal">출발지</th>
                          <th className="py-1 text-left text-gray-400 font-normal">포트</th>
                          <th className="py-1 text-left text-gray-400 font-normal">설명</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="py-1 text-gray-600">TCP</td>
                          <td className="py-1 text-gray-600 font-mono">10.0.1.117/32</td>
                          <td className="py-1 text-gray-900 font-medium">5432</td>
                          <td className="py-1 text-gray-600">PostgreSQL</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-gray-600">TCP</td>
                          <td className="py-1 text-gray-600 font-mono">10.0.1.117/32</td>
                          <td className="py-1 text-gray-900 font-medium">8001</td>
                          <td className="py-1 text-gray-600">AI Service</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-gray-600">ICMP</td>
                          <td className="py-1 text-gray-600 font-mono">10.0.1.117/32</td>
                          <td className="py-1 text-gray-900 font-medium">ALL</td>
                          <td className="py-1 text-gray-600">Ping</td>
                        </tr>
                        <tr>
                          <td className="py-1 text-gray-600">TCP</td>
                          <td className="py-1 text-gray-600 font-mono">10.0.1.117/32</td>
                          <td className="py-1 text-gray-900 font-medium">22</td>
                          <td className="py-1 text-gray-600">SSH</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="border-t border-gray-300 mb-16" />

        {/* 문제 해결 1: SSH 브루트포스 */}
        <section className="mb-16">
          <h2 className="text-lg font-bold text-gray-900 mb-6 border-l-4 border-gray-900 pl-3">
            문제 해결 1: SSH 브루트포스 공격 대응
          </h2>

          <div className="mb-8">
            <h3 className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">
                01
              </span>
              <span className="text-base font-bold text-gray-900">
                문제 발생
              </span>
            </h3>
            <p className="text-gray-700 ml-11">
              서버 운영 2주 만에{" "}
              <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm">
                lastb
              </code>
              로<strong> 1,107건</strong> SSH 로그인 실패 기록 발견. 자동화된
              봇의 브루트포스 공격.
            </p>
            <img
              src="/images/project_images/lastb_1.png"
              alt="lastb 명령어 실행 결과"
              className="w-full rounded-lg mt-4"
            />
          </div>

          <div className="my-8">
            <div className="border-t border-dashed border-gray-300"></div>
          </div>

          <div className="mb-8">
            <h3 className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">
                02
              </span>
              <span className="text-base font-bold text-gray-900">
                해결 과정
              </span>
            </h3>
            <div className="space-y-4 text-sm ml-11">
              <div>
                <p className="font-semibold text-gray-900">자동 차단</p>
                <p className="text-gray-500 mt-1">
                  <span className="text-gray-400 mr-2">•</span>fail2ban 도입 -
                  3회 실패 시 IP 자동 차단
                </p>
                <p className="text-xs text-gray-400 ml-4">
                  수동 IP 차단은 비효율적. 로그 기반 자동 차단으로 운영 부담
                  최소화
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">포트 은닉</p>
                <p className="text-gray-500 mt-1">
                  <span className="text-gray-400 mr-2">•</span>SSH 포트 변경 (22
                  → 52222)
                </p>
                <p className="text-xs text-gray-400 ml-4">
                  봇은 기본 포트 22만 스캔. 비표준 포트로 90% 이상 자동 공격
                  회피
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">다층 방어</p>
                <p className="text-gray-500 mt-1">
                  <span className="text-gray-400 mr-2">•</span>Defense in Depth
                  - UFW + 보안그룹 이중 방화벽
                </p>
                <p className="text-xs text-gray-400 ml-4">
                  단일 방화벽 설정 실수 시에도 2차 방어선 유지
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">네트워크 격리</p>
                <p className="text-gray-500 mt-1">
                  <span className="text-gray-400 mr-2">•</span>GPU Server
                  Private Subnet 배치 + Public IP 제거
                </p>
                <p className="text-gray-500 mt-0.5">
                  <span className="text-gray-400 mr-2">•</span>Bastion Host (SSH
                  ProxyJump) 구성
                </p>
                <p className="text-xs text-gray-400 ml-4">
                  DB/AI 모델 보호. App Server 경유만 허용
                </p>
              </div>
            </div>
            <img
              src="/images/project_images/gpu_pri.png"
              alt="보안 아키텍처 변경 전후 비교"
              className="w-full rounded-lg mt-4"
            />
          </div>

          <div className="my-8">
            <div className="border-t border-dashed border-gray-300"></div>
          </div>

          <div>
            <h3 className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">
                03
              </span>
              <span className="text-base font-bold text-gray-900">결과</span>
            </h3>
            <div className="overflow-x-auto mb-4 ml-11">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-2 text-left text-gray-500 font-medium">
                      서버
                    </th>
                    <th className="py-2 text-left text-gray-500 font-medium">
                      대응 전
                    </th>
                    <th className="py-2 text-left text-gray-500 font-medium">
                      대응 후
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-2 text-gray-900">App Server</td>
                    <td className="py-2 text-gray-900">1,107건</td>
                    <td className="py-2 font-bold text-gray-900">
                      침투 0건 (299 IP 차단)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-900">GPU Server</td>
                    <td className="py-2 text-gray-900">205건</td>
                    <td className="py-2 font-bold text-gray-900">
                      공격 시도 0건
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-11">
              <div>
                <img
                  src="/images/project_images/lastb_2.png"
                  alt="GPU Server - Public IP 제거 후"
                  className="w-full rounded-lg mb-1"
                />
                <p className="text-xs text-gray-500">
                  GPU Server - 신규 공격 0건
                </p>
              </div>
              <div>
                <img
                  src="/images/project_images/lastb_3.png"
                  alt="App Server - 52222 탐지됐으나 차단"
                  className="w-full rounded-lg mb-1"
                />
                <p className="text-xs text-gray-500">
                  App Server - 포트 탐지됐으나 침투 차단
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-300 mb-16" />

        {/* 문제 해결 2: 서버 경량화 */}
        <section className="mb-16">
          <h2 className="text-lg font-bold text-gray-900 mb-6 border-l-4 border-gray-900 pl-3">
            문제 해결 2: 서버 경량화 및 자동화
          </h2>

          <div className="mb-8">
            <h3 className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">
                01
              </span>
              <span className="text-base font-bold text-gray-900">
                문제 발생
              </span>
            </h3>
            <p className="text-gray-700 ml-11">
              App Server 스토리지 <strong>10GB SSD</strong>. Docker 이미지
              1.2GB, 시스템 로그 427MB 누적.
            </p>
            <img
              src="/images/project_images/app_df.png"
              alt="App Server 디스크 사용량"
              className="w-full rounded-lg mt-4"
            />
          </div>

          <div className="my-8">
            <div className="border-t border-dashed border-gray-300"></div>
          </div>

          <div className="mb-8">
            <h3 className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">
                02
              </span>
              <span className="text-base font-bold text-gray-900">
                해결 과정
              </span>
            </h3>
            <div className="space-y-4 text-sm ml-11">
              <div>
                <p className="font-semibold text-gray-900">이미지 경량화</p>
                <p className="text-gray-500 mt-1">
                  <span className="text-gray-400 mr-2">•</span>Docker
                  멀티스테이지 빌드
                </p>
                <p className="text-xs text-gray-400 ml-4">
                  빌드 환경(node_modules)과 실행 환경 분리. 최종 이미지에 빌드
                  도구 미포함
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">런타임 제거</p>
                <p className="text-gray-500 mt-1">
                  <span className="text-gray-400 mr-2">•</span>Nginx 정적
                  서빙으로 전환
                </p>
                <p className="text-xs text-gray-400 ml-4">
                  SPA는 빌드 후 정적 파일만 필요. Node 런타임 제거로 리소스 절약
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">자동 정리</p>
                <p className="text-gray-500 mt-1">
                  <span className="text-gray-400 mr-2">•</span>Cron 자동화
                  스크립트 (매주 금요일)
                </p>
                <p className="text-xs text-gray-400 ml-4">
                  수동 정리는 잊기 쉬움. 주간 스케줄로 디스크 풀 사전 예방
                </p>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mt-4">
              <pre className="text-xs text-gray-300 font-mono">
                {`# 매주 금요일 자동 정리
0 17 * * 5 /home/ubuntu/scripts/weekly-cleanup.sh

# journalctl 7일 이전 로그 삭제 + Docker prune`}
              </pre>
            </div>
          </div>

          <div className="my-8">
            <div className="border-t border-dashed border-gray-300"></div>
          </div>

          <div>
            <h3 className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">
                03
              </span>
              <span className="text-base font-bold text-gray-900">결과</span>
            </h3>
            <div className="overflow-x-auto mb-4 ml-11">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-2 text-left text-gray-500 font-medium">
                      항목
                    </th>
                    <th className="py-2 text-left text-gray-500 font-medium">
                      Before
                    </th>
                    <th className="py-2 text-left text-gray-500 font-medium">
                      After
                    </th>
                    <th className="py-2 text-left text-gray-500 font-medium">
                      개선
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-2 text-gray-900">Docker 이미지</td>
                    <td className="py-2 text-gray-900">1.2GB</td>
                    <td className="py-2 text-gray-900">95MB</td>
                    <td className="py-2 font-bold text-gray-900">92% 감소</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-900">시스템 로그</td>
                    <td className="py-2 text-gray-900">427MB</td>
                    <td className="py-2 text-gray-900">16MB</td>
                    <td className="py-2 font-bold text-gray-900">96% 감소</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <img
              src="/images/project_images/weekly_1.png"
              alt="Weekly Cleanup 실행 로그"
              className="w-full rounded-lg"
            />
            <p className="text-xs text-gray-500 mt-1">
              freed 0B = 자동화 성공. 주간 정기 실행으로 쌓이기 전에 미리
              정리됨.
            </p>
          </div>
        </section>

        <hr className="border-t border-gray-300 mb-16" />

        {/* 문제 해결 3: CI/CD */}
        <section className="mb-16">
          <h2 className="text-lg font-bold text-gray-900 mb-6 border-l-4 border-gray-900 pl-3">
            문제 해결 3: CI/CD 파이프라인 구축
          </h2>

          <div className="mb-8">
            <h3 className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">
                01
              </span>
              <span className="text-base font-bold text-gray-900">
                문제 발생
              </span>
            </h3>
            <p className="text-gray-700 ml-11">
              수동 배포 시 휴먼 에러 발생. GPU 서버가{" "}
              <strong>Private Subnet</strong>이라 GitHub Actions에서 직접 접근
              불가.
            </p>
            <img
              src="/images/project_images/gpu_ci-cd.png"
              alt="GitHub Actions 배포 실패 - Private Subnet 접근 불가"
              className="w-full rounded-lg mt-4"
            />
          </div>

          <div className="my-8">
            <div className="border-t border-dashed border-gray-300"></div>
          </div>

          <div className="mb-8">
            <h3 className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">
                02
              </span>
              <span className="text-base font-bold text-gray-900">
                해결 과정
              </span>
            </h3>
            <div className="space-y-4 text-sm ml-11">
              <div>
                <p className="font-semibold text-gray-900">워크플로우 분리</p>
                <p className="text-gray-500 mt-1">
                  <span className="text-gray-400 mr-2">•</span>Path 기반 트리거
                  (frontend/backend/ai)
                </p>
                <p className="text-xs text-gray-400 ml-4">
                  폴더별 독립 배포. 불필요한 빌드 방지
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Private 서버 배포</p>
                <p className="text-gray-500 mt-1">
                  <span className="text-gray-400 mr-2">•</span>SSH ProxyJump
                  설정
                </p>
                <p className="text-xs text-gray-400 ml-4">
                  App Server를 점프 호스트로 활용. GPU 서버 Public IP 없이 배포
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">시크릿 관리</p>
                <p className="text-gray-500 mt-1">
                  <span className="text-gray-400 mr-2">•</span>GitHub Secrets로
                  환경변수 분리
                </p>
                <p className="text-xs text-gray-400 ml-4">
                  SSH 키, DB 비밀번호 등 민감 정보. 코드에 하드코딩 제거
                </p>
              </div>
            </div>
            <img
              src="/images/project_images/ci-cd.png"
              alt="CI/CD 파이프라인 구조"
              className="w-full rounded-lg mt-4"
            />
          </div>

          <div className="my-8">
            <div className="border-t border-dashed border-gray-300"></div>
          </div>

          <div>
            <h3 className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500">
                03
              </span>
              <span className="text-base font-bold text-gray-900">결과</span>
            </h3>
            <div className="space-y-3 ml-11">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-900">
                  deploy-frontend.yml
                </p>
                <p className="text-xs text-gray-500">
                  frontend/** 변경 → npm build → rsync → /var/www/
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-900">
                  deploy-backend.yml
                </p>
                <p className="text-xs text-gray-500">
                  backend/** 변경 → SSH → docker compose up -d --build
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-900">
                  deploy-gpu.yml
                </p>
                <p className="text-xs text-gray-500">
                  ai/** 변경 → SSH (ProxyJump) → GPU 서버 배포
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mt-4 ml-11">
              <strong>dev/main push만으로 자동 배포</strong>. 수동 배포 대비
              배포 시간 단축, 휴먼 에러 제거.
            </p>
            <div className="space-y-4 mt-4">
              <div>
                <img
                  src="/images/project_images/ci-cd3.png"
                  alt="Before - 배포 시간 10분대"
                  className="w-full rounded-lg mb-1"
                />
                <p className="text-xs text-gray-500">Before - 10m 49s</p>
              </div>
              <div>
                <img
                  src="/images/project_images/ci-cd2.png"
                  alt="After - 배포 시간 2분 미만"
                  className="w-full rounded-lg mb-1"
                />
                <p className="text-xs text-gray-500">
                  After - 1m 43s (83% 단축)
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-300 mb-16" />

        {/* 느낀점 */}
        <section className="mb-16">
          <h2 className="text-lg font-bold text-gray-900 mb-4 border-l-4 border-gray-900 pl-3">
            느낀점
          </h2>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <div className="flex">
              <span className="text-gray-400 mr-2 shrink-0">•</span>
              <p>
                서버 2대로 할 수 있는 게 생각보다 많았다. Public/Private Subnet
                분리, Bastion Host 구성, <br />
                CI/CD 파이프라인까지 실제 프로덕션 환경을 직접 설계하고
                운영하면서 클라우드 아키텍처에 대한 이해가 깊어졌다.
              </p>
            </div>
            <div className="flex">
              <span className="text-gray-400 mr-2 shrink-0">•</span>
              <p>
                자동화된 봇의 브루트포스 공격을 처음 겪었다.{" "}
                <code className="px-1 py-0.5 bg-gray-100 rounded text-xs">
                  lastb
                </code>{" "}
                로그에서 1,000건이 넘는 공격 시도를 보고 당황했지만,
                <br />
                fail2ban 설정과 포트 변경, 네트워크 격리까지 단계적으로
                대응하면서 Defense in Depth의 중요성을 체감했다.
              </p>
            </div>
            <div className="flex">
              <span className="text-gray-400 mr-2 shrink-0">•</span>
              <p>
                문제를 해결할 때마다 Velog에 기록하는 습관을 들였다.
                <br /> 글로 정리하면서 내가 뭘 했는지 명확해졌고, 나중에 비슷한
                상황에서 빠르게 참고할 수 있었다.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-t border-gray-300 mb-16" />

        {/* 관련 글 */}
        <section className="mb-16">
          <h2 className="text-lg font-bold text-gray-900 mb-4 border-l-4 border-gray-900 pl-3">
            관련 글
          </h2>
          <div className="space-y-2 text-sm">
            <p>
              <span className="text-gray-400 mr-2">•</span>
              <Link
                href="https://velog.io/@leelaeloo/클라우드-인프라-구축기-2"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 hover:underline transition-colors"
              >
                #2 SSH 브루트포스 공격 대응
              </Link>
            </p>
            <p>
              <span className="text-gray-400 mr-2">•</span>
              <Link
                href="https://velog.io/@leelaeloo/클라우드-인프라-구축기-3"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 hover:underline transition-colors"
              >
                #3 서버 경량화 및 자동화
              </Link>
            </p>
            <p>
              <span className="text-gray-400 mr-2">•</span>
              <Link
                href="https://velog.io/@leelaeloo/클라우드-인프라-구축기-5"
                target="_blank"
                className="text-gray-500 hover:text-gray-900 hover:underline transition-colors"
              >
                #5 CI/CD 파이프라인 구축
              </Link>
            </p>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link
            href="/projects"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors group"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>모든 프로젝트</span>
          </Link>
          <Link
            href="/projects/moviesir-infra"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors group"
          >
            <span>다음 프로젝트</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
