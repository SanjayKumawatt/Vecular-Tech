import React from 'react';

const TermsOfService = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Terms of Service
        </h1>

        {/* --- Main Content --- */}
        {/* Tailwind 'prose' class text ko sundar format karti hai */}
        <div className="prose prose-lg prose-sky mt-12 max-w-none">
          
          <h3>1. General - Scope of Application</h3>
          <p>
            1.1. The following Terms and Conditions apply to all business
            relationships between the Customer and VEHICULR, a brand of
            VEHICULR TECHNOLOGIES PRIVATE LIMITED, also hereinafter referred to
            as "us/we". These Terms and Conditions are an integral part of
            all contracts with the Customer. These Terms and Conditions also
            apply to future services and offers, even if the Customer does
            not separately agree upon them again.
          </p>
          <p>
            1.2. The terms and conditions of our customers or third parties are
            not applicable and are not part of the contract, even if we do
            not separately object to their application in individual cases.
          </p>
          <p>
            1.3. We expressly reserve the right to make changes to our Terms
            and Conditions, System Policies, and prices by giving the
            Customer prior notification via their customer account or using
            the email address the Customer enters in their contact
            information.
          </p>
          <p>
            1.4. The conditions and policies listed in the preamble apply in
            the order of precedence listed above.
          </p>
          <p>
            1.5. Our employees and third parties commissioned by them are not
            authorized to make verbal agreements or to provide any verbal
            guarantees or commitments to the Customer.
          </p>

          <h3>2. Payments</h3>
          <p>
            2.1. Clients shall remit payment for services in advance for the
            applicable billing cycle. Invoices for domain renewals shall be
            generated thirty (30) days prior to the renewal date. Invoices
            for web hosting and cloud server services shall be generated ten
            (10) days prior to the renewal date.
          </p>
          <p>
            2.2. A grace period of five (5) days post-renewal date shall be
            provided. Failure to remit payment within this period shall
            result in temporary suspension of services. Notification of
            invoice generation shall be made via SMS (for clients within
            India) and email.
          </p>
          <p>2.3. Payment methods accepted:</p>
          <ul>
            <li>
              Indian clients: Razorpay, Paytm, and Stripe.
            </li>
            <li>
              Clients outside India: PayPal and Stripe (note: payments from
              unverified PayPal accounts are not accepted).
            </li>
          </ul>

          <h3>3. Service Activation</h3>
          <p>
            3.1. Services, including Domain Registration, Web Hosting, and
            Cloud Servers, are typically activated immediately upon payment
            completion. Delays may occur due to technical issues or if
            additional information is required from the client.
          </p>
          <p>
            3.2. Accounts failing initial verification may experience
            extended activation times. VEHICULR shall contact the client for
            further details required to complete verification.
          </p>

          <h3>4. Service Cancellation</h3>
          <p>
            4.1. Service cancellation requests must be submitted via a
            support ticket through the client's VEHICULR account.
          </p>
          <p>
            4.2. No cancellations or refunds shall be provided for domains,
            service licenses, or other addons.
          </p>
          <p>
            4.3. Expired domains registered with VEHICULR may be recovered
            during the redemption period upon payment of a redemption fee,
            exclusive of the registration price for the subsequent year.
          </p>

          <h3>5. Service Termination</h3>
          <p>
            5.1. Shared hosting accounts that are thirty (30) days past due
            shall be automatically deleted from VEHICULR servers, with no
            backups provided.
          </p>
          <p>
            5.2. Cloud servers that are ten (10) days past due shall be
            automatically deleted, with no backups provided under any
            circumstances.
          </p>

          <h3>6. Service Backups</h3>
          <p>
            6.1. VEHICULR performs daily backups for all shared hosting
            accounts, which are stored for a maximum of seven (7) days. The
            use of backups is at the client's sole risk. Restoration or
            provision of backups is free unless the hosting service is
            canceled.
          </p>
          <p>
            6.2. VEHICULR does not guarantee the availability of backups,
            which may or may not be provided depending on the situation.
            Clients are strongly advised to maintain local copies of their
            data and not to rely solely on VEHICULR's backup services.
          </p>
          <p>
            6.3. No backups shall be provided for Cloud Servers unless the
            client has opted for the backup service. Clients who have not
            opted for this service must maintain their own backups, as
            VEHICULR will not be responsible for data loss in such cases.
          </p>

          <h3>7. Banned Scripts</h3>
          <p>
            7.1. The following scripts are banned on VEHICULR servers due to
            adverse effects on server load, security, and other
            considerations:
          </p>
          <ul>
            <li>IRC egg drops</li>
            <li>Proxy servers</li>
            <li>Mail bombers</li>
            <li>Anonymous mailers</li>
            <li>IP spoofers</li>
            <li>Port scanners</li>
            <li>Hivemail</li>
            <li>Telnet or SSH Access Scripts</li>
            <li>Nph-proxy and similar scripts</li>
            <li>UBB (Ultimate Bulletin Board, all versions)</li>
            <li>Lstmrge.cgi</li>
            <li>PhpShell</li>
            <li>FormMail.cgi and FormMail.pl from Matt's Script Archive</li>
            <li>Torrents</li>
            <li>Phishing</li>
            <li>Pornography</li>
            <li>Nulled Scripts, Plugins, Themes</li>
          </ul>
          <p>
            7.2. Use of nulled scripts may result in the suspension or
            termination of the client's account without refund.
          </p>

          <h3>8. Service Monitoring</h3>
          <p>
            8.1. Web hosting servers are monitored 24/7, 365 days a year.
          </p>
          <p>
            8.2. Monitoring for cloud servers is available as an addon.
            VEHICULR shall open a ticket with a detailed explanation of any
            issues detected.
          </p>

          <h3>9. Data Migration</h3>
          <p>
            9.1. VEHICULR offers free migration for its web hosting service.
            The client is responsible for rectifying any issues arising from
            incorrect setup post-migration.
          </p>
          <p>
            9.2. If root access to the remote server is not provided, up to
            twenty-five (25) accounts shall be transferred for free.
            Additional accounts shall incur a charge based on disk usage.
          </p>

          <h3>10. Additional IP</h3>
          <p>
            10.1. VEHICULR provides additional IP addresses for Cloud servers
            and dedicated IPs for shared hosting.
          </p>
          <p>
            10.2. Up to ten (10) IP addresses per Cloud server may be
            provided, subject to additional information regarding their
            usage. IP addresses used for spamming shall be suspended
            immediately.
          </p>

          <h3>11. Server Uptime</h3>
          <p>
            11.1. VEHICULR guarantees 99.9% uptime for its services. Downtime
            excludes necessary updates and hardware maintenance. Advance
            notice shall be provided for any updates or maintenance.
          </p>

          <h3>12. Acceptable Use Policy</h3>
          <p>
            12.1. Clients agree to use VEHICULR's services in compliance with
            all applicable local, state, national, and international laws
            and regulations.
          </p>
          <p>
            12.2. Clients shall not use VEHICULR's services to engage in any
            activity that is illegal, harmful, or infringes upon the rights
            of others. This includes, but is not limited to, the
            distribution of malware, unsolicited bulk email (spam), and
            activities related to hacking or unauthorized access to systems.
          </p>

          <h3>13. Limitation of Liability</h3>
          <p>
            13.1. VEHICULR shall not be liable for any indirect, incidental,
            special, punitive, or consequential damages, including but not
            limited to loss of profits, revenue, data, or use, incurred by
            the client or any third party, whether in an action in contract
            or tort, arising from the use of our services.
          </p>
          <p>
            13.2. VEHICULR's total liability for damages under this Agreement
            shall not exceed the amount paid by the client for the services
            during the twelve (12) months preceding the event giving rise to
            the liability.
          </p>

          <h3>14. Indemnification</h3>
          <p>
            14.1. Clients agree to indemnify, defend, and hold harmless
            VEHICULR, its affiliates, and their respective officers,
            directors, employees, and agents from and against any and all
            claims, liabilities, damages, losses, and expenses, including
            reasonable attorney's fees and costs, arising out of or in any
            way connected with the client's use of the services, violation of
            this Agreement, or infringement by the client or any third party
            using the client's account, of any intellectual property or other
            right of any person or entity.
          </p>

          <h3>15. Governing Law and Jurisdiction</h3>
          <p>
            15.1. This Agreement shall be governed by and construed in
            accordance with the laws of India, without regard to its conflict
            of laws principles.
          </p>
          <p>
            15.2. Any disputes arising out of or in connection with this
            Agreement shall be subject to the exclusive jurisdiction of the
            courts located in <span style={{fontWeight: 'bold'}}>Bangalore, India</span>.
          </p>

          <h3>16. Confidentiality</h3>
          <p>
            16.1. Both parties agree to keep confidential all information
            disclosed by the other party that is designated as confidential
            or that reasonably should be understood to be confidential given
            the nature of the information and the circumstances of
            disclosure.
          </p>
          <p>
            16.2. This obligation of confidentiality shall survive the
            termination of this Agreement.
          </p>

          <h3>17. Force Majeure</h3>
          <p>
            17.1. Neither party shall be liable for any delay or failure to
            perform its obligations under this Agreement if such delay or
            failure is due to circumstances beyond the party's reasonable
            control, including but not limited to acts of God, war,
            terrorism, strikes, or other industrial disputes, natural
            disasters, or interruptions in internet services.
          </p>

          <h3>18. Severability</h3>
          <p>
            18.1. If any provision of this Agreement is found to be invalid
            or unenforceable, the remaining provisions shall continue in
            full force and effect.
          </p>

          <h3>19. Entire Agreement</h3>
          <p>
            19.1. This Agreement constitutes the entire agreement between
            the parties regarding the subject matter hereof and supersedes
            all prior and contemporaneous agreements, proposals, or
            representations, written or oral, concerning its subject matter.
          </p>

          <h3>20. Waiver</h3>
          <p>
            20.1. The failure of either party to enforce any right or
            provision of this Agreement shall not constitute a waiver of such
            right or provision.
          </p>

          <h3>21. Changes in Terms of Service</h3>
          <p>
            21.1. VEHICULR reserves the right to modify this Agreement without
            advance notice. Changes shall be posted on the VEHICULR website,
            superseding the previous agreement.
          </p>
          <p>
            21.2. Clients are responsible for regularly reviewing the Terms
            of Service for updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;